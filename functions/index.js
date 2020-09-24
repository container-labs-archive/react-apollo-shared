"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.createWrapper;
  }
});
Object.defineProperty(exports, "deleteWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.deleteWrapper;
  }
});
Object.defineProperty(exports, "listWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.listWrapper;
  }
});
Object.defineProperty(exports, "childListWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.childListWrapper;
  }
});
Object.defineProperty(exports, "singleWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.singleWrapper;
  }
});
Object.defineProperty(exports, "updateWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.updateWrapper;
  }
});
Object.defineProperty(exports, "authenticated", {
  enumerable: true,
  get: function get() {
    return _hocs.authenticated;
  }
});
Object.defineProperty(exports, "checkPermission", {
  enumerable: true,
  get: function get() {
    return _hocs.checkPermission;
  }
});
Object.defineProperty(exports, "requireAdmin", {
  enumerable: true,
  get: function get() {
    return _hocs.requireAdmin;
  }
});
Object.defineProperty(exports, "queryLoader", {
  enumerable: true,
  get: function get() {
    return _hocs.queryLoader;
  }
});
Object.defineProperty(exports, "refetchOnMount", {
  enumerable: true,
  get: function get() {
    return _hocs.refetchOnMount;
  }
});
Object.defineProperty(exports, "waitingOnData", {
  enumerable: true,
  get: function get() {
    return _hocs.waitingOnData;
  }
});
Object.defineProperty(exports, "BrowserLogger", {
  enumerable: true,
  get: function get() {
    return _utils.BrowserLogger;
  }
});
Object.defineProperty(exports, "Logger", {
  enumerable: true,
  get: function get() {
    return _utils.Logger;
  }
});
exports["default"] = void 0;

var _graphql = _interopRequireWildcard(require("./graphql"));

var _hocs = require("./hocs");

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _graphql["default"];
exports["default"] = _default;