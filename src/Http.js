import axios from 'axios';
import store from './store';
import * as actions from './store/actions';

const access_token = localStorage.getItem('access_token');


//axios.defaults.baseURL = `https://attendance.ajenotech.com/api/v1`;
axios.defaults.baseURL = `http://13.126.166.203:40`;
axios.defaults.headers.common.Authorization = access_token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = true;


axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(actions.authLogout());
    }
    return Promise.reject(error);
  },
);

export default axios;
