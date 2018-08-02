"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createWrapper", {
  enumerable: true,
  get: function () {
    return _index.createWrapper;
  }
});
Object.defineProperty(exports, "deleteWrapper", {
  enumerable: true,
  get: function () {
    return _index.deleteWrapper;
  }
});
Object.defineProperty(exports, "listWrapper", {
  enumerable: true,
  get: function () {
    return _index.listWrapper;
  }
});
Object.defineProperty(exports, "childListWrapper", {
  enumerable: true,
  get: function () {
    return _index.childListWrapper;
  }
});
Object.defineProperty(exports, "singleWrapper", {
  enumerable: true,
  get: function () {
    return _index.singleWrapper;
  }
});
Object.defineProperty(exports, "updateWrapper", {
  enumerable: true,
  get: function () {
    return _index.updateWrapper;
  }
});
exports.default = void 0;

var _index = require("./server/wrappers/index");

var _firebase = _interopRequireDefault(require("./server/firebase"));

var _default = _firebase.default;
exports.default = _default;