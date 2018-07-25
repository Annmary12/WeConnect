import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER, LOGIN_FAILED } from './types';

/**
 * @description handles setting authenticated users
 * @param {object} user - contains user details
 * @returns {object} returns user action
 */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

/**
 * @description handles a failed login action
 * @param {object} error - contains error message
 * @returns {object} returns failed user action
 */
export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error
  };
}

/**
 *
 * @description handles action to login a user
 * @param {object} userData - contains user details
 * @returns {object} returns failed or success user action
 */
export function userLoginRequest(userData) {
  return dispatch => axios.post('/api/v1/auth/login', userData).then((res) => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
  }).catch((error) => {
    dispatch(loginFailed(error.response.data.message));
  });
}

/**
 * @description handles logout action
 * @param {void} void
 * @returns {void} void
 */
export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}
