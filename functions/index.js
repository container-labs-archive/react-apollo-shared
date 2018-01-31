"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createWrapper", {
  enumerable: true,
  get: function () {
    return _graphql.createWrapper;
  }
});
Object.defineProperty(exports, "deleteWrapper", {
  enumerable: true,
  get: function () {
    return _graphql.deleteWrapper;
  }
});
Object.defineProperty(exports, "listWrapper", {
  enumerable: true,
  get: function () {
    return _graphql.listWrapper;
  }
});
Object.defineProperty(exports, "childListWrapper", {
  enumerable: true,
  get: function () {
    return _graphql.childListWrapper;
  }
});
Object.defineProperty(exports, "singleWrapper", {
  enumerable: true,
  get: function () {
    return _graphql.singleWrapper;
  }
});
Object.defineProperty(exports, "updateWrapper", {
  enumerable: true,
  get: function () {
    return _graphql.updateWrapper;
  }
});
Object.defineProperty(exports, "authenticated", {
  enumerable: true,
  get: function () {
    return _hocs.authenticated;
  }
});
Object.defineProperty(exports, "checkPermission", {
  enumerable: true,
  get: function () {
    return _hocs.checkPermission;
  }
});
Object.defineProperty(exports, "requireAdmin", {
  enumerable: true,
  get: function () {
    return _hocs.requireAdmin;
  }
});
Object.defineProperty(exports, "queryLoader", {
  enumerable: true,
  get: function () {
    return _hocs.queryLoader;
  }
});
Object.defineProperty(exports, "refetchOnMount", {
  enumerable: true,
  get: function () {
    return _hocs.refetchOnMount;
  }
});
Object.defineProperty(exports, "waitingOnData", {
  enumerable: true,
  get: function () {
    return _hocs.waitingOnData;
  }
});
exports.default = void 0;

var _graphql = _interopRequireWildcard(require("./graphql"));

var _hocs = require("./hocs");

var _default = _graphql.default;
exports.default = _default;