import * as ActionTypes from '../action-types';

export function authLogin(payload) {
  return {
    type: ActionTypes.AUTH_LOGIN,
    payload,
  };
}

export function authRegister(payload) {
  return {
    type: ActionTypes.AUTH_REGISTER,
    payload,
  };
}

export function authLogout() {
  return {
    type: ActionTypes.AUTH_LOGOUT,
  };
}

export function authCheck() {
  return {
    type: ActionTypes.AUTH_CHECK,
  };
  }

export function persist_store(payload) {
  return {
    type: ActionTypes.PERSIST_STORE,
	payload
  };
}

export function profile(payload) {
  return {
    type: ActionTypes.PROFILE,
	payload
  };
}