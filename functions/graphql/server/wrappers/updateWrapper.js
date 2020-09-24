"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("../firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// @no-flow
function updateWrapper(itemName, updateFunction) {
  console.log("UPDATE: ".concat(itemName));

  var itemRef = _firebase["default"].instance().ref(itemName);

  return updateFunction(itemRef).then(function () {
    // make singular, meh worth it?
    return {
      status: 200,
      key: itemName,
      message: "".concat(itemName, " updated")
    };
  })["catch"](function (error) {
    return {
      status: 500,
      key: itemName,
      message: 'update failed',
      error: error
    };
  });
}

var _default = updateWrapper;
exports["default"] = _default;