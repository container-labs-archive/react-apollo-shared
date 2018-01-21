// @no-flow

import FireClass from '../firebase';

function updateWrapper(itemName: String, updateFunction: Function) {
  console.log(`UPDATE: ${itemName}`);
  const itemRef = FireClass.instance().ref(itemName);

  return updateFunction(itemRef).then(() => {
    // make singular, meh worth it?
    return {
      status: 200,
      key: itemName,
      message: `${itemName} updated`
    }
  }).catch((error) => {
    return {
      status: 500,
      key: itemName,
      message: 'update failed',
      error,
    }
  });
}

export default updateWrapper;
