"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.childListWrapper = childListWrapper;
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _firebase = _interopRequireDefault(require("../firebase"));

function listWrapper(collectionName, opts) {
  console.log("GET_LIST: ".concat(collectionName));
  console.time('listWrapper');
  let queryOpts = opts || {};

  let queryRef = _firebase.default.instance().ref(collectionName); // TODO: need to sort first....


  if (queryOpts.limit) {
    queryRef = _firebase.default.instance().ref(collectionName).orderByKey().limitToLast(queryOpts.limit);
  }

  return queryRef.once('value').then(snapshot => {
    return _firebase.default.instance().mapSnapshotToEntities(snapshot);
  }).then(models => {
    console.timeEnd('listWrapper');
    let sortedModels = models;

    if (queryOpts.sortBy !== undefined) {
      console.log('sorting'); // todo: allow sortby to be an array?

      sortedModels = _lodash.default.sortBy(models, [model => model[queryOpts.sortBy].toLowerCase()]);
    }

    if (queryOpts.sortReverse !== undefined) {
      sortedModels = sortedModels.reverse();
    }

    return sortedModels;
  }).catch(error => {
    console.error(error);
    return null;
  });
}

function childListWrapper(collectionName, parentKey, childName, childListFunction) {
  console.log("CHILD_LIST: ".concat(childName, " for ").concat(collectionName), parentKey);
  console.time('childList');
  return _firebase.default.instance().ref(collectionName).orderByChild(childName).equalTo(parentKey).once('value').then(snapshot => {
    const models = _firebase.default.instance().mapSnapshotToEntities(snapshot);

    console.timeEnd('childList');
    console.log("returning ".concat(collectionName, " ").concat(models.length, " ").concat(childName));
    return childListFunction(models);
  }).catch(error => {
    console.error(error);
    return null;
  });
}

var _default = listWrapper;
exports.default = _default;