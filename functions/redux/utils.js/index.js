"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isAuthenticated", {
  enumerable: true,
  get: function () {
    return _tokens.isAuthenticated;
  }
});
Object.defineProperty(exports, "idFromStorage", {
  enumerable: true,
  get: function () {
    return _tokens.idFromStorage;
  }
});
Object.defineProperty(exports, "emailFromStorage", {
  enumerable: true,
  get: function () {
    return _tokens.emailFromStorage;
  }
});
Object.defineProperty(exports, "authTokenFromStorage", {
  enumerable: true,
  get: function () {
    return _tokens.authTokenFromStorage;
  }
});
Object.defineProperty(exports, "TOKEN", {
  enumerable: true,
  get: function () {
    return _tokens.TOKEN;
  }
});

var _tokens = require("./tokens");