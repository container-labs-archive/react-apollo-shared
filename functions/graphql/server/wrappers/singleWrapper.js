"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebase = _interopRequireDefault(require("../firebase"));

function singleWrapper(itemName) {
  console.log(`GET: ${itemName}`);
  return _firebase.default.instance().getEntity(itemName).then(model => {
    // extra work here?
    return model;
  }).catch(error => {
    console.error(error);
    return null;
  });
}

var _default = singleWrapper;
exports.default = _default;
module.exports = exports["default"];