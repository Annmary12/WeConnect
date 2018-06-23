import axios from 'axios';
import {
  IS_REQUESTING,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  USER_BUSINESSES_SUCCESS,
  USER_BUSINESSES_FAILURE
} from './types';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';

/**
 * @description handles fetch a user
 * @param {number} id - contains user id
 * @returns {object} - returns user success or failed user action
 */
export const getUserRequest = id => dispatch =>
  axios.get(`api/v1/auth/user/${id}`)
    .then((response) => {
      dispatch(actionResponseSuccess(GET_USER_SUCCESS, response.data.getUser));
    })
    .catch((error) => {
      dispatch(actionResponseFailure(GET_USER_FAILURE, 'User not found'));
    });

/**
 * @description handles user's business action
 * @param {number} id - contains the id of the user
 * @param {number} page - holds the page number
 * @returns {object} - returns success or failure of user's business action
 */
export const getUserBusinessesRequest = (id, page) => (
  (dispatch) => {
    dispatch(isRequesting(IS_REQUESTING, true));
    return axios.get(`api/v1/auth/user/${id}/business?page=${page}`)
      .then((response) => {
        // return console.log('success', response);
        dispatch(actionResponseSuccess(USER_BUSINESSES_SUCCESS, response.data));
        dispatch(isRequesting(IS_REQUESTING, false));
      })
      .catch((error) => {
        return console.log('failure', error);
        dispatch(actionResponseFailure(USER_BUSINESSES_FAILURE, error.response.data.message));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
  });
