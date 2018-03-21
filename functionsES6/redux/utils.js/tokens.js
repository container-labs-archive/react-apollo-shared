import { firebaseAuth } from '../firebase/firebase';


const TOKEN = `libra_token_${process.env.NODE_BUILD_ENV}`;


// grab the token
// try to parse it
// see how old it is
// if it's old, refresh

function getTokenObject(payload) {
  // console.log('token name', TOKEN);
  return payload.getIdToken(true).then((token) => {
    // console.log('TOKEN', token);
    return JSON.stringify({
      uid: payload.uid,
      email: payload.email,
      timestamp: new Date().getTime(),
      token,
    });
  });
}

function refreshToken() {
  const user = firebaseAuth.currentUser;
  if (user != null) {
    getTokenObject(user).then((tokenObj) => {
      // console.log("SETTING STORAGE WITH NEW TOKEN", tokenObj);
      localStorage.setItem(TOKEN, tokenObj);
    });
  }
}

function storageToken() {
  // console.log('storageToken');
  // refreshToken();
  const tokenObject = localStorage.getItem(TOKEN);
  if (tokenObject === null || tokenObject === 'null') {
    return null;
  }
  let token = null;
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
  const token = storageToken();
  if (token === null) {
    return false;
  }

  const tokenTimestamp = token.timestamp;
  const nowTimestamp = new Date().getTime();
  const diffStampInSeconds = (nowTimestamp - tokenTimestamp) / 1000;

  if (diffStampInSeconds >= 36000) { // 10 hours
    return false;
  }

  return true;
}


function idFromStorage() {
  const token = storageToken();
  if (token === null) {
    return null;
  }
  return token.uid;
}

function authTokenFromStorage() {
  // console.log('token name', TOKEN);
  const token = storageToken();
  if (token === null) {
    return null;
  }

  const tokenTimestamp = token.timestamp;
  const nowTimestamp = new Date().getTime();
  const diffStampInSeconds = (nowTimestamp - tokenTimestamp) / 1000;

  if (diffStampInSeconds >= 1800) { // every half hour
    // this might not be needed
    refreshToken();
  }

  return token.token;
}

// TODO: dedupe with logic above
function emailFromStorage() {
  const token = storageToken();
  if (token === null) {
    return null;
  }

  return token.email;
}

export {
  isAuthenticated,
  idFromStorage,
  emailFromStorage,
  authTokenFromStorage,
  TOKEN,
};
