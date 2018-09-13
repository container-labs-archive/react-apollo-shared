"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("babel-runtime/helpers/extends"));

var _for = _interopRequireDefault(require("babel-runtime/core-js/symbol/for"));

var _lodash = require("lodash");

var instance = null;
var singleton = (0, _for.default)('FireClass');
var singletonEnforcer = (0, _for.default)('FireClassEnforcer');

var FireClass =
/*#__PURE__*/
function () {
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
    return (0, _extends2.default)({
      id: snapshot.key
    }, snapshot.val());
  };

  _proto.mapSnapshotToEntities = function mapSnapshotToEntities(snapshot) {
    return (0, _lodash.map)(snapshot.val(), function (value, id) {
      return (0, _extends2.default)({
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
  }; // begin firestore


  _proto.firestoreDb = function firestoreDb() {
    return global[singleton].firebaseAdmin.firestore();
  };

  return FireClass;
}();

var _default = FireClass;
exports.default = _default;