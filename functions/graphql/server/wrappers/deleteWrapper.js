"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebase = _interopRequireDefault(require("../firebase"));

// @no-flow
function deleteWrapper(itemName, deleteFunction) {
  console.log(`DELETE: ${itemName}`);

  const itemRef = _firebase.default.instance().ref(itemName);

  return deleteFunction(itemRef).then(() => {
    // make singular, meh worth it?
    return {
      status: 200,
      key: itemName,
      message: `${itemName} deleted`
    };
  }).catch(error => {
    return {
      status: 500,
      key: itemName,
      message: 'delete failed',
      error
    };
  });
}

var _default = deleteWrapper;
exports.default = _default;