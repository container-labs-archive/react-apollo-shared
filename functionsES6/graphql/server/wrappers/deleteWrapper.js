// @no-flow

import FireClass from '../firebase';

function deleteWrapper(itemName: String, deleteFunction: Function) {
  console.log(`DELETE: ${itemName}`);
  const itemRef = FireClass.instance().ref(itemName);

  return deleteFunction(itemRef).then(() => {
    // make singular, meh worth it?
    return {
      status: 200,
      key: itemName,
      message: `${itemName} deleted`,
    };
  }).catch((error) => {
    return {
      status: 500,
      key: itemName,
      message: 'delete failed',
      error,
    };
  });
}

export default deleteWrapper;
