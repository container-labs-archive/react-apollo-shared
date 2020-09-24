"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.reverse");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.childListWrapper = childListWrapper;
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _firebase = _interopRequireDefault(require("../firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function listWrapper(collectionName, opts) {
  console.log("GET_LIST: ".concat(collectionName));
  console.time('listWrapper');
  var queryOpts = opts || {};

  var queryRef = _firebase["default"].instance().ref(collectionName); // TODO: need to sort first....


  if (queryOpts.limit) {
    queryRef = _firebase["default"].instance().ref(collectionName).orderByKey().limitToLast(queryOpts.limit);
  }

  return queryRef.once('value').then(function (snapshot) {
    return _firebase["default"].instance().mapSnapshotToEntities(snapshot);
  }).then(function (models) {
    console.timeEnd('listWrapper');
    var sortedModels = models;

    if (queryOpts.sortBy !== undefined) {
      console.log('sorting'); // todo: allow sortby to be an array?

      sortedModels = _lodash["default"].sortBy(models, [function (model) {
        return model[queryOpts.sortBy].toLowerCase();
      }]);
    }

    if (queryOpts.sortReverse !== undefined) {
      sortedModels = sortedModels.reverse();
    }

    return sortedModels;
  })["catch"](function (error) {
    console.error(error);
    return null;
  });
}

function childListWrapper(collectionName, parentKey, childName, childListFunction) {
  console.log("CHILD_LIST: ".concat(childName, " for ").concat(collectionName), parentKey);
  console.time('childList');
  return _firebase["default"].instance().ref(collectionName).orderByChild(childName).equalTo(parentKey).once('value').then(function (snapshot) {
    var models = _firebase["default"].instance().mapSnapshotToEntities(snapshot);

    console.timeEnd('childList');
    console.log("returning ".concat(collectionName, " ").concat(models.length, " ").concat(childName));
    return childListFunction(models);
  })["catch"](function (error) {
    console.error(error);
    return null;
  });
}

var _default = listWrapper;
exports["default"] = _default;