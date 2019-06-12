import { push } from 'connected-react-router';

import { firebaseAuth } from '../firebase/firebase';
// import { selectUser } from '../users/actions';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin() {
  return {
    type: LOGIN_REQUEST,
  };
}

function getTokenObject(payload) {
  return payload.getIdToken().then((token) => {
    return {
      uid: payload.uid,
      email: payload.email,
      timestamp: new Date().getTime(),
      token,
    };
  });
}

function loginSuccess(result) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: getTokenObject(result),
    }).then(() => {
      dispatch(push('/home'));
      // dispatch(selectUser(result.uid));
    });
  };
}

function loginError(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export function login(creds) {
  return (dispatch) => {
    dispatch(requestLogin());
    firebaseAuth.signInWithEmailAndPassword(creds.username, creds.password)
      .then((result) => {
        dispatch(loginSuccess(result));
      })
      .catch(error => dispatch(loginError(error)));
  };
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
}

function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    isFetching: false,
    payload: error,
  };
}

export function logout() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('matched_ports_token'); // eslint-disable-line no-undef
    firebaseAuth.signOut()
      .then(() => dispatch(logoutSuccess()))
      .catch(error => dispatch(logoutFailure(error)));
  };
}
