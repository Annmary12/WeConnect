import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './types';

/**
 *
 * @param {object} user
 * @returns {object} user
 */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

/**
 * 
 * @description action to login a user
 * @param {object} userData
 * @returns {object} userData
 */
export function userLoginRequest(userData) {
  return dispatch => axios.post('api/v1/auth/login', userData).then((res) => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
  });
}

/**
 *
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
