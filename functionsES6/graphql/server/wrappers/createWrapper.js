import FireClass from '../firebase';

// add publish? right now handled in create functions
function createWrapper(collectionName: String, input: Object, createFunction) {
  if (input === null) {
    return Promise.reject();
  }

  const collectionRef = FireClass.instance().ref(collectionName);
  const newModelRef = collectionRef.push();

  const model = {
    key: newModelRef.key,
    createDate: Date.now(),
    ...input,
  };

  console.log(`CREATE: ${collectionName} ${model.key}`);
  return createFunction(model, newModelRef).then(() => {
    return {
      status: 200,
      key: model.key,
      message: `appended to ${collectionName}`
    }
  }).catch((error) => {
    console.error(error);
    return {
      status: 500,
      key: model.key,
      message: 'append failed',
      error,
    }
  });
}

export default createWrapper;
