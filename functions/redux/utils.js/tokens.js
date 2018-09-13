"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = isAuthenticated;
exports.idFromStorage = idFromStorage;
exports.emailFromStorage = emailFromStorage;
exports.authTokenFromStorage = authTokenFromStorage;
exports.TOKEN = void 0;

var _stringify = _interopRequireDefault(require("babel-runtime/core-js/json/stringify"));

var _firebase = require("../firebase/firebase");

var TOKEN = "libra_token_".concat(process.env.NODE_BUILD_ENV); // grab the token
// try to parse it
// see how old it is
// if it's old, refresh

exports.TOKEN = TOKEN;

function getTokenObject(payload) {
  // console.log('token name', TOKEN);
  return payload.getIdToken(true).then(function (token) {
    // console.log('TOKEN', token);
    return (0, _stringify.default)({
      uid: payload.uid,
      email: payload.email,
      timestamp: new Date().getTime(),
      token: token
    });
  });
}

function refreshToken() {
  var user = _firebase.firebaseAuth.currentUser;

  if (user != null) {
    getTokenObject(user).then(function (tokenObj) {
      // console.log("SETTING STORAGE WITH NEW TOKEN", tokenObj);
      localStorage.setItem(TOKEN, tokenObj);
    });
  }
}

function storageToken() {
  // console.log('storageToken');
  // refreshToken();
  var tokenObject = localStorage.getItem(TOKEN);

  if (tokenObject === null || tokenObject === 'null') {
    return null;
  }

  var token = null;

  try {
    token = JSON.parse(tokenObject);
    refreshToken();
  } catch (e) {
    localStorage.setItem(TOKEN, null);
  }

  return token;
}

function isAuthenticated() {
  // console.log('token name', TOKEN);
  var token = storageToken();

  if (token === null) {
    return false;
  }

  var tokenTimestamp = token.timestamp;
  var nowTimestamp = new Date().getTime();
  var diffStampInSeconds = (nowTimestamp - tokenTimestamp) / 1000;

  if (diffStampInSeconds >= 36000) {
    // 10 hours
    return false;
  }

  return true;
}

function idFromStorage() {
  var token = storageToken();

  if (token === null) {
    return null;
  }

  return token.uid;
}

function authTokenFromStorage() {
  // console.log('token name', TOKEN);
  var token = storageToken();

  if (token === null) {
    return null;
  }

  var tokenTimestamp = token.timestamp;
  var nowTimestamp = new Date().getTime();
  var diffStampInSeconds = (nowTimestamp - tokenTimestamp) / 1000;

  if (diffStampInSeconds >= 1800) {
    // every half hour
    // this might not be needed
    refreshToken();
  }

  return token.token;
} // TODO: dedupe with logic above


function emailFromStorage() {
  var token = storageToken();

  if (token === null) {
    return null;
  }

  return token.email;
}