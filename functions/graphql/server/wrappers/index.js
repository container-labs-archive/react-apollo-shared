"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createWrapper", {
  enumerable: true,
  get: function get() {
    return _createWrapper["default"];
  }
});
Object.defineProperty(exports, "deleteWrapper", {
  enumerable: true,
  get: function get() {
    return _deleteWrapper["default"];
  }
});
Object.defineProperty(exports, "listWrapper", {
  enumerable: true,
  get: function get() {
    return _listWrapper["default"];
  }
});
Object.defineProperty(exports, "childListWrapper", {
  enumerable: true,
  get: function get() {
    return _listWrapper.childListWrapper;
  }
});
Object.defineProperty(exports, "singleWrapper", {
  enumerable: true,
  get: function get() {
    return _singleWrapper["default"];
  }
});
Object.defineProperty(exports, "updateWrapper", {
  enumerable: true,
  get: function get() {
    return _updateWrapper["default"];
  }
});

var _createWrapper = _interopRequireDefault(require("./createWrapper"));

var _deleteWrapper = _interopRequireDefault(require("./deleteWrapper"));

var _listWrapper = _interopRequireWildcard(require("./listWrapper"));

var _singleWrapper = _interopRequireDefault(require("./singleWrapper"));

var _updateWrapper = _interopRequireDefault(require("./updateWrapper"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }