import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SIGNUP_FAILED, SET_CURRENT_USER } from './types';
import { setCurrentUser } from './login';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';


/**
 * @description handles action to signup a new user
 * @param {object} userData - contains the user details
 * @returns {object} returns the success or failure of signup action
 */
const userSignupRequest = userData => dispatch => axios.post('/api/v1/auth/signup', userData)
  .then((res) => {
    const {
      token
    } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
  })
  .catch((error) => {
    dispatch(actionResponseFailure(SIGNUP_FAILED, error.response.data));
  });

export default userSignupRequest;
