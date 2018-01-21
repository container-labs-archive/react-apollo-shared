"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebase = _interopRequireDefault(require("../firebase"));

// @no-flow
function updateWrapper(itemName, updateFunction) {
  console.log(`UPDATE: ${itemName}`);

  const itemRef = _firebase.default.instance().ref(itemName);

  return updateFunction(itemRef).then(() => {
    // make singular, meh worth it?
    return {
      status: 200,
      key: itemName,
      message: `${itemName} updated`
    };
  }).catch(error => {
    return {
      status: 500,
      key: itemName,
      message: 'update failed',
      error
    };
  });
}

var _default = updateWrapper;
exports.default = _default;
module.exports = exports["default"];