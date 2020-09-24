"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var envKey = process.env.NODE_BUILD_ENV || process.env.NODE_ENV; // TODO: make browserLog

var BrowserLogger = /*#__PURE__*/function () {
  function BrowserLogger(environment) {
    this.environment = environment;
  }

  var _proto = BrowserLogger.prototype;

  _proto.log = function log(message) {
    switch (this.environment) {
      case 'test':
        {
          break;
        }

      case 'production':
        {
          break;
        }

      default:
        {
          console.log(message); // eslint-disable-line
        }
    }
  };

  _proto.error = function error(message) {
    switch (envKey) {
      case 'test':
        {
          break;
        }

      case 'production':
        {
          break;
        }

      default:
        {
          console.error(message); // eslint-disable-line
        }
    }
  };

  _proto.debug = function debug(message) {
    switch (envKey) {
      case 'test':
        {
          break;
        }

      case 'production':
        {
          break;
        }

      default:
        {
          console.log(message); // eslint-disable-line
        }
    }
  };

  return BrowserLogger;
}();

var _default = BrowserLogger;
exports["default"] = _default;