import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from './login';
import { SIGNUP_FAILED } from './types';

/**
 * @description handles failed signup action
 * @param {error} error - contains the error message
 * @returns {object} returns error
 */
export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error
  };
}

/**
 * @description handles action to signup a new user
 * @param {object} userData - contains the user details
 * @returns {object} returns the success or failure of signup action
 */
export const userSignupRequest = userData => dispatch => axios.post('api/v1/auth/signup', userData)
  .then((res) => {
    const {
      token
    } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
  })
  .catch((error) => {
    dispatch(signupFailed(error.response.data));
  });
