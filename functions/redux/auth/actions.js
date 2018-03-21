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
const LOGIN_REQUEST = 'LOGIN_REQUEST';
exports.LOGIN_REQUEST = LOGIN_REQUEST;
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
const LOGIN_FAILURE = 'LOGIN_FAILURE';
exports.LOGIN_FAILURE = LOGIN_FAILURE;

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

function getTokenObject(payload) {
  return payload.getIdToken().then(token => {
    return {
      uid: payload.uid,
      email: payload.email,
      timestamp: new Date().getTime(),
      token
    };
  });
}

function loginSuccess(result) {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: getTokenObject(result)
    }).then(() => {
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
  return dispatch => {
    dispatch(requestLogin());

    _firebase.firebaseAuth.signInWithEmailAndPassword(creds.username, creds.password).then(result => {
      dispatch(loginSuccess(result));
    }).catch(error => dispatch(loginError(error)));
  };
}

const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
exports.LOGOUT_REQUEST = LOGOUT_REQUEST;
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
exports.LOGOUT_SUCCESS = LOGOUT_SUCCESS;
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
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
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('matched_ports_token'); // eslint-disable-line no-undef

    _firebase.firebaseAuth.signOut().then(() => dispatch(logoutSuccess())).catch(error => dispatch(logoutFailure(error)));
  };
}