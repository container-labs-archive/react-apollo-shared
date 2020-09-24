"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var envKey = process.env.NODE_BUILD_ENV || process.env.NODE_ENV;

var Logger = /*#__PURE__*/function () {
  function Logger(environment) {
    this.environment = environment;
  }

  var _proto = Logger.prototype;

  _proto.log = function log(message) {
    switch (this.environment) {
      case 'test':
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

  return Logger;
}();

var _default = Logger;
exports["default"] = _default;