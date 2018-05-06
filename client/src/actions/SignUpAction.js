import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from './login';
import { SIGNUP_FAILED } from './types';

/**
 *
 * @param {error} error
 * @returns {object} error
 */
export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error
  };
}

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
