import { Record } from 'immutable';

import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS,
} from './actions';

import {
  isAuthenticated,
  idFromStorage,
  emailFromStorage,
  TOKEN,
} from '../utils/tokens';

const Auth = new Record({
  isAuthenticated: isAuthenticated(),
  userId: idFromStorage(),
  userEmail: emailFromStorage(),
  isFetching: false,
  error: '',
  user: '',
  id: '',
});

const LOGIN_SUCCESS_FULFILLED = 'LOGIN_SUCCESS_FULFILLED';

export default function reducer(state = new Auth(), action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state.set('user', action.creds);
    } case LOGIN_SUCCESS_FULFILLED: {
      const payload = action.payload;
      let newState = state.set('isAuthenticated', true);
      newState = newState.set('isFetching', false);
      newState = newState.set('error', '');
      newState = newState.set('id', action.payload.uid);
      newState = newState.set('userId', action.payload.uid);
      newState = newState.set('userEmail', action.payload.email);
      localStorage.setItem(TOKEN, JSON.stringify(payload));
      return newState;
    } case LOGIN_FAILURE: {
      const newState = state.set('isFetching', false);
      return newState.set('error', action.payload.message);
    } case LOGOUT_REQUEST: {
      return state.set('isFetching', true);
    } case LOGOUT_SUCCESS: {
      let newState = state.set('isFetching', false);
      newState = newState.set('isAuthenticated', false);
      localStorage.setItem(TOKEN, null);
      return newState;
    }
    default: {
      return state;
    }
  }
}
