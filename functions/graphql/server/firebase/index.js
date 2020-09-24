"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var instance = null;
var singleton = Symbol["for"]('FireClass');
var singletonEnforcer = Symbol["for"]('FireClassEnforcer');

var FireClass = /*#__PURE__*/function () {
  function FireClass(enforcer, firebaseAdmin) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }

    if (firebaseAdmin === undefined) {
      throw new Error('Must pass in a firebase admin object');
    }

    this.firebaseAdmin = firebaseAdmin;
  }

  FireClass.instance = function instance(firebaseAdmin) {
    if (!global[singleton]) {
      global[singleton] = new FireClass(singletonEnforcer, firebaseAdmin);
    }

    return global[singleton];
  };

  var _proto = FireClass.prototype;

  _proto.ref = function ref(path) {
    return global[singleton].firebaseAdmin.database().ref(path);
  };

  _proto.bucket = function bucket(name) {
    return global[singleton].firebaseAdmin.storage().bucket(name);
  };

  _proto.mapSnapshotToEntity = function mapSnapshotToEntity(snapshot) {
    return _objectSpread({
      id: snapshot.key
    }, snapshot.val());
  };

  _proto.mapSnapshotToEntities = function mapSnapshotToEntities(snapshot) {
    return (0, _lodash.map)(snapshot.val(), function (value, id) {
      return _objectSpread({
        id: id
      }, value);
    });
  };

  _proto.getValue = function getValue(path) {
    return global[singleton].ref(path).once('value');
  };

  _proto.getEntity = function getEntity(path) {
    return global[singleton].getValue(path).then(global[singleton].mapSnapshotToEntity);
  };

  _proto.getEntities = function getEntities(path) {
    return global[singleton].getValue(path).then(global[singleton].mapSnapshotToEntities);
  } // begin firestore
  ;

  _proto.firestoreDb = function firestoreDb() {
    return global[singleton].firebaseAdmin.firestore();
  };

  return FireClass;
}();

var _default = FireClass;
exports["default"] = _default;