"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _stringify = _interopRequireDefault(require("babel-runtime/core-js/json/stringify"));

var _immutable = require("immutable");

var _actions = require("./actions");

var _tokens = require("../utils/tokens");

const Auth = new _immutable.Record({
  isAuthenticated: (0, _tokens.isAuthenticated)(),
  userId: (0, _tokens.idFromStorage)(),
  userEmail: (0, _tokens.emailFromStorage)(),
  isFetching: false,
  error: '',
  user: '',
  id: ''
});
const LOGIN_SUCCESS_FULFILLED = 'LOGIN_SUCCESS_FULFILLED';

function reducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Auth();
  let action = arguments[1];

  switch (action.type) {
    case _actions.LOGIN_REQUEST:
      {
        return state.set('user', action.creds);
      }

    case LOGIN_SUCCESS_FULFILLED:
      {
        const payload = action.payload;
        let newState = state.set('isAuthenticated', true);
        newState = newState.set('isFetching', false);
        newState = newState.set('error', '');
        newState = newState.set('id', action.payload.uid);
        newState = newState.set('userId', action.payload.uid);
        newState = newState.set('userEmail', action.payload.email);
        localStorage.setItem(_tokens.TOKEN, (0, _stringify.default)(payload));
        return newState;
      }

    case _actions.LOGIN_FAILURE:
      {
        const newState = state.set('isFetching', false);
        return newState.set('error', action.payload.message);
      }

    case _actions.LOGOUT_REQUEST:
      {
        return state.set('isFetching', true);
      }

    case _actions.LOGOUT_SUCCESS:
      {
        let newState = state.set('isFetching', false);
        newState = newState.set('isAuthenticated', false);
        localStorage.setItem(_tokens.TOKEN, null);
        return newState;
      }

    default:
      {
        return state;
      }
  }
}