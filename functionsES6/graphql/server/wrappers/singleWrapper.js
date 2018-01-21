import FireClass from '../firebase';

function singleWrapper(itemName: String) {
  console.log(`GET: ${itemName}`);

  return FireClass.instance().getEntity(itemName).then((model) => {
    // extra work here?
    return model;
  }).catch((error) => {
    console.error(error);
    return null;
  });
}

export default singleWrapper;
