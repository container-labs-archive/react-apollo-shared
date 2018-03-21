import lodash from 'lodash';

import FireClass from '../firebase';

function listWrapper(collectionName: String, opts: Object) {
  console.log(`GET_LIST: ${collectionName}`);
  console.time('listWrapper');
  let queryOpts = opts || {};
  let queryRef = FireClass.instance().ref(collectionName);
  // TODO: need to sort first....
  if (queryOpts.limit) {
    queryRef = FireClass.instance().ref(collectionName).orderByKey().limitToLast(queryOpts.limit);
  }

  return queryRef.once('value').then((snapshot) => {
      return FireClass.instance().mapSnapshotToEntities(snapshot)
    })
    .then((models) => {
      console.timeEnd('listWrapper');
      let sortedModels = models;
      if (queryOpts.sortBy !== undefined) {
        console.log('sorting');
        // todo: allow sortby to be an array?
        sortedModels = lodash.sortBy(models, [model => model[queryOpts.sortBy].toLowerCase()]);
      }
      if (queryOpts.sortReverse !== undefined) {
        sortedModels = sortedModels.reverse();
      }
      return sortedModels;
    }).catch((error) => {
      console.error(error);
      return null;
    });
}

function childListWrapper(collectionName: String, parentKey: String, childName: String, childListFunction) {
  console.log(`CHILD_LIST: ${childName} for ${collectionName}`, parentKey);
  console.time('childList');
  return FireClass.instance().ref(collectionName)
    .orderByChild(childName)
    .equalTo(parentKey)
    .once('value')
    .then((snapshot) => {
      const models = FireClass.instance().mapSnapshotToEntities(snapshot);
      console.timeEnd('childList');
      console.log(`returning ${collectionName} ${models.length} ${childName}`);
      return childListFunction(models);
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export default listWrapper;

export {
  childListWrapper,
};
