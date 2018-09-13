"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.LOGOUT_FAILURE = exports.LOGOUT_SUCCESS = exports.LOGOUT_REQUEST = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.LOGIN_REQUEST = void 0;

var _reactRouterRedux = require("react-router-redux");

var _firebase = require("../firebase/firebase");

// import { selectUser } from '../users/actions';
var LOGIN_REQUEST = 'LOGIN_REQUEST';
exports.LOGIN_REQUEST = LOGIN_REQUEST;
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
var LOGIN_FAILURE = 'LOGIN_FAILURE';
exports.LOGIN_FAILURE = LOGIN_FAILURE;

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

function getTokenObject(payload) {
  return payload.getIdToken().then(function (token) {
    return {
      uid: payload.uid,
      email: payload.email,
      timestamp: new Date().getTime(),
      token: token
    };
  });
}

function loginSuccess(result) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: getTokenObject(result)
    }).then(function () {
      dispatch((0, _reactRouterRedux.push)('/home')); // dispatch(selectUser(result.uid));
    });
  };
}

function loginError(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
}

function login(creds) {
  return function (dispatch) {
    dispatch(requestLogin());

    _firebase.firebaseAuth.signInWithEmailAndPassword(creds.username, creds.password).then(function (result) {
      dispatch(loginSuccess(result));
    }).catch(function (error) {
      return dispatch(loginError(error));
    });
  };
}

var LOGOUT_REQUEST = 'LOGOUT_REQUEST';
exports.LOGOUT_REQUEST = LOGOUT_REQUEST;
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
exports.LOGOUT_SUCCESS = LOGOUT_SUCCESS;
var LOGOUT_FAILURE = 'LOGOUT_FAILURE';
exports.LOGOUT_FAILURE = LOGOUT_FAILURE;

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    isFetching: false,
    payload: error
  };
}

function logout() {
  return function (dispatch) {
    dispatch(requestLogout());
    localStorage.removeItem('matched_ports_token'); // eslint-disable-line no-undef

    _firebase.firebaseAuth.signOut().then(function () {
      return dispatch(logoutSuccess());
    }).catch(function (error) {
      return dispatch(logoutFailure(error));
    });
  };
}