import axios from 'axios';
import {
  IS_REQUESTING,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  USER_BUSINESSES_SUCCESS,
  USER_BUSINESSES_FAILURE,
  USER_UPDATE_SUCCESSFUL,
  USER_UPDATE_FAILURE
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
    .catch(() => {
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
        dispatch(actionResponseSuccess(USER_BUSINESSES_SUCCESS, response.data));
        dispatch(isRequesting(IS_REQUESTING, false));
      })
      .catch((error) => {
        dispatch(actionResponseFailure(USER_BUSINESSES_FAILURE, error.response.data.message));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
  });

/**
 * @description handles user's profile update
 * @param {object} user - contains user details
 * @param {string} cloudImageUrl - contains user image url
 * @returns {object} - returns success or failure of user's action
 */
export const updateUser = (user, cloudImageUrl) => (
  dispatch => (
    axios({
      method: 'PUT',
      url: '/api/v1/auth/user',
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        image: cloudImageUrl
      }
    }).then((response) => {
      dispatch(isRequesting(IS_REQUESTING, false));
      dispatch(actionResponseSuccess(USER_UPDATE_SUCCESSFUL, response.data.message));
    })
      .catch((error) => {
        dispatch(isRequesting(IS_REQUESTING, false));
        dispatch(actionResponseFailure(USER_UPDATE_FAILURE, error));
      })
  )
);

/**
 * @description action to update a particular user image to cloudinary
 * @param {object} user - contains details of the user
 * @returns {object} success/failed image update
 */
export const updateUserRequest = user => (
  (dispatch) => {
    dispatch(isRequesting(IS_REQUESTING, true));
    let cloudImageUrl = user.currentImageSrc;
    if (!user.image.name) {
      return dispatch(updateUser(user, cloudImageUrl));
    }
    const data = new FormData();
    data.append('file', user.image);
    data.append('upload_preset', process.env.CLOUDINARY_PRESET);
    delete axios.defaults.headers.common.Authorization;
    return axios.post(process.env.CLOUDINARY_URL, data)
      .then(({ data }) => {
        const token = localStorage.getItem('jwtToken');
        axios.defaults.headers.common.Authorization = token;
        cloudImageUrl = data.secure_url;
        // dispatch single action
        return dispatch(updateUser(user, cloudImageUrl));
      })
      .catch(() => {
        dispatch(actionResponseFailure(USER_UPDATE_FAILURE, 'Failed to upload image. Try again'));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
  });
