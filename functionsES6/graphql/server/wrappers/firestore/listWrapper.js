import lodash from 'lodash';

import { admin } from '../firebase';

const PAGE_SIZE = 25;

// initial cloud firestore list wrapper test
function listWrapper(collectionName: String, opts: Object) {
  console.log(`GET_LIST: ${collectionName}`);
  console.time('listWrapper');

  const queryOpts = opts || {};
  console.log('opts', opts);
  let collectionRef = admin.firestore().collection(collectionName);

  // TODO: what about a fuzzy filter?
  if (queryOpts.filter && queryOpts.filter.on) {
    const { on, value } = queryOpts.filter;
    collectionRef = collectionRef.where(on, '==', value);
  }

  if (queryOpts.orderBy) {
    const { by, direction } = queryOpts.orderBy;
    const finalDirection = direction === undefined ? 'desc' : direction;
    collectionRef = collectionRef.orderBy(by, finalDirection);
  }
  if (queryOpts.page) {
    collectionRef = collectionRef.startAt(queryOpts.page * PAGE_SIZE);
  }
  if (queryOpts.limit) {
    collectionRef = collectionRef.limit(queryOpts.limit);
  }

  const response = {
    data: [],
    page: queryOpts.page,
  };

  return collectionRef.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      response.data.push({
        ...doc.data(),
        key: doc.id,
        id: doc.id,
      });
    });

    return response;
  });
}

export default listWrapper;

