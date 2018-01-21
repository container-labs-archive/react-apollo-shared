import { map } from 'lodash';

let instance = null;

const singleton = Symbol.for('FireClass');
const singletonEnforcer = Symbol.for('FireClassEnforcer');

class FireClass {
  constructor(enforcer, firebaseAdmin) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
    if (firebaseAdmin === undefined) {
      throw new Error('Must pass in a firebase admin object');
    }

    this.firebaseAdmin = firebaseAdmin;
  }

  static instance(firebaseAdmin) {
    if (!global[singleton]) {
      global[singleton] = new FireClass(singletonEnforcer, firebaseAdmin);
    }

    return global[singleton];
  }

  ref(path) {
    return global[singleton].firebaseAdmin.database().ref(path)
  }

  mapSnapshotToEntity(snapshot) {
    return ({ id: snapshot.key, ...snapshot.val() });
  }

  mapSnapshotToEntities(snapshot) {
    return map(snapshot.val(), (value, id) => ({ id, ...value }));
  }

  getValue(path) {
    return global[singleton].ref(path).once('value');
  }

  getEntity(path) {
    return global[singleton].getValue(path).then(global[singleton].mapSnapshotToEntity);
  }

  getEntities(path) {
    return global[singleton].getValue(path).then(global[singleton].mapSnapshotToEntities);
  }
}

export default FireClass;
