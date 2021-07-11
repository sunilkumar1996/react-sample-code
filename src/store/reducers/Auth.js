import * as ActionTypes from '../action-types';
import Http from '../../Http';

const defaultUser = {
  id: null,
  invitation_code: null,
  email: null,
  username: null,
  role: null,
  logo: null,
};

const initialState = {
  isAuthenticated: false,
  user: defaultUser,
};

const profile = (state, payload) => {
	//console.log(payload)
	//console.log(state)
	
 // const { user } = payload;
  ///console.log(JSON.stringify(user));
  localStorage.setItem('user', JSON.stringify(payload));
  const stateObj = {
    ...state,
    isAuthenticated: true,
    payload,
  };
  return stateObj;
};

const authLogin = (state, payload) => {
  const { token, user } = payload;
  localStorage.setItem('access_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  Http.defaults.headers.common.Authorization = token;
  const stateObj = {
    ...state,
    isAuthenticated: true,
    user,
  };
  return stateObj;
};

const authRegister = (state, payload) => {
  const { token, user } = payload;
  localStorage.setItem('access_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  Http.defaults.headers.common.Authorization = token;
  const stateObj = {
    ...state,
    isAuthenticated: true,
    user,
  };
  return stateObj;
};

const checkAuth = (state) => {
  const stateObj = {
    ...state,
    isAuthenticated: !!localStorage.getItem('access_token'),
    user: JSON.parse(localStorage.getItem('user')),
  };
  if (state.isAuthenticated) {
    Http.defaults.headers.common.Authorization = localStorage.getItem('access_token');
  }
  return stateObj;
};

const logout = (state) => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user');
  const stateObj = {
    ...state,
    isAuthenticated: false,
    user: defaultUser,
  };
  return stateObj;
};

const Auth = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case ActionTypes.AUTH_LOGIN:
      return authLogin(state, payload);
    case ActionTypes.AUTH_CHECK:
      return checkAuth(state);
    case ActionTypes.AUTH_LOGOUT:
      return logout(state);
	case ActionTypes.PROFILE:
      return profile(state, payload);
    default:
      return state;
  }
};

export default Auth;
