"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BrowserLogger", {
  enumerable: true,
  get: function get() {
    return _browserLogger["default"];
  }
});
Object.defineProperty(exports, "Logger", {
  enumerable: true,
  get: function get() {
    return _logger["default"];
  }
});

var _browserLogger = _interopRequireDefault(require("./browserLogger"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }