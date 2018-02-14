"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const envKey = undefined || "production";
let Logger = class Logger {
  constructor(environment) {
    this.environment = environment;
  }

  log(message) {
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
  }

  error(message) {
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
  }

  debug(message) {
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
  }

};
var _default = Logger;
exports.default = _default;
module.exports = exports["default"];