"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reducer;

var _immutable = require("immutable");

var _actions = require("./actions");

var _tokens = require("../utils/tokens");

var Auth = new _immutable.Record({
  isAuthenticated: (0, _tokens.isAuthenticated)(),
  userId: (0, _tokens.idFromStorage)(),
  userEmail: (0, _tokens.emailFromStorage)(),
  isFetching: false,
  error: '',
  user: '',
  id: ''
});
var LOGIN_SUCCESS_FULFILLED = 'LOGIN_SUCCESS_FULFILLED';

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Auth();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.LOGIN_REQUEST:
      {
        return state.set('user', action.creds);
      }

    case LOGIN_SUCCESS_FULFILLED:
      {
        var payload = action.payload;
        var newState = state.set('isAuthenticated', true);
        newState = newState.set('isFetching', false);
        newState = newState.set('error', '');
        newState = newState.set('id', action.payload.uid);
        newState = newState.set('userId', action.payload.uid);
        newState = newState.set('userEmail', action.payload.email);
        localStorage.setItem(_tokens.TOKEN, JSON.stringify(payload));
        return newState;
      }

    case _actions.LOGIN_FAILURE:
      {
        var _newState = state.set('isFetching', false);

        return _newState.set('error', action.payload.message);
      }

    case _actions.LOGOUT_REQUEST:
      {
        return state.set('isFetching', true);
      }

    case _actions.LOGOUT_SUCCESS:
      {
        var _newState2 = state.set('isFetching', false);

        _newState2 = _newState2.set('isAuthenticated', false);
        localStorage.setItem(_tokens.TOKEN, null);
        return _newState2;
      }

    default:
      {
        return state;
      }
  }
}