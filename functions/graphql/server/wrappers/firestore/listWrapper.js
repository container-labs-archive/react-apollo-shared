"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _firebase = require("../firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PAGE_SIZE = 25; // initial cloud firestore list wrapper test

function listWrapper(collectionName, opts) {
  console.log("GET_LIST: ".concat(collectionName));
  console.time('listWrapper');
  var queryOpts = opts || {};
  console.log('opts', opts);

  var collectionRef = _firebase.admin.firestore().collection(collectionName); // TODO: what about a fuzzy filter?


  if (queryOpts.filter && queryOpts.filter.on) {
    var _queryOpts$filter = queryOpts.filter,
        on = _queryOpts$filter.on,
        value = _queryOpts$filter.value;
    collectionRef = collectionRef.where(on, '==', value);
  }

  if (queryOpts.orderBy) {
    var _queryOpts$orderBy = queryOpts.orderBy,
        by = _queryOpts$orderBy.by,
        direction = _queryOpts$orderBy.direction;
    var finalDirection = direction === undefined ? 'desc' : direction;
    collectionRef = collectionRef.orderBy(by, finalDirection);
  }

  if (queryOpts.page) {
    collectionRef = collectionRef.startAt(queryOpts.page * PAGE_SIZE);
  }

  if (queryOpts.limit) {
    collectionRef = collectionRef.limit(queryOpts.limit);
  }

  var response = {
    data: [],
    page: queryOpts.page
  };
  return collectionRef.get().then(function (snapshot) {
    snapshot.forEach(function (doc) {
      response.data.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
        key: doc.id,
        id: doc.id
      }));
    });
    return response;
  });
}

var _default = listWrapper;
exports["default"] = _default;