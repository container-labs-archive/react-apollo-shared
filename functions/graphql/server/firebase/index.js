"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("babel-runtime/helpers/extends"));

var _for = _interopRequireDefault(require("babel-runtime/core-js/symbol/for"));

var _lodash = require("lodash");

let instance = null;
const singleton = (0, _for.default)('FireClass');
const singletonEnforcer = (0, _for.default)('FireClassEnforcer');
let FireClass = class FireClass {
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
    return global[singleton].firebaseAdmin.database().ref(path);
  }

  mapSnapshotToEntity(snapshot) {
    return (0, _extends2.default)({
      id: snapshot.key
    }, snapshot.val());
  }

  mapSnapshotToEntities(snapshot) {
    return (0, _lodash.map)(snapshot.val(), (value, id) => (0, _extends2.default)({
      id
    }, value));
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

};
var _default = FireClass;
exports.default = _default;
module.exports = exports["default"];