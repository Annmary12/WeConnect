import axios from 'axios';
import {
  FETCH_BUSINESS_SUCCESSFUL,
  FETCH_ONE_BUSINESS_SUCCESSFUL,
  UPDATE_BUSINESS_SUCCESSFUL,
  DELETE_BUSINESS_SUCCESSFUL,
  DELETE_BUSINESS_FAILED,
  SAVE_IMAGE_FAILED,
  FETCH_BUSINESS_FAILED,
  UPDATE_BUSINESS_FAILED,
  LIKE_FAILED,
  LIKE_SUCCESSFUL,
  IS_REQUESTING
} from './types';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';

/**
 * @description handles fetch business
 * @param {number} page - holds the page number
 * @returns {object} returns fetched business action
 */
export const fetchBusinessesRequest = page => dispatch =>
  axios.get(`/api/v1/businesses?page=${page}`)
    .then((response) => {
      dispatch(actionResponseSuccess(FETCH_BUSINESS_SUCCESSFUL, response.data));
    })
    .catch((error) => {
      dispatch(actionResponseFailure(FETCH_BUSINESS_FAILED, error.response.data.message));
    });

/**
 * @description handle search businesses
 * @param {string} searchType - contains the search type
 * @param {string} value - contains the search value
 * @returns {object} returns fetched business(es) action or error
 */
export const searchBusinessesRequest = (searchType, value) => dispatch =>
  axios.get(`/api/v1/businesses?${searchType}=${value}`)
    .then((response) => {
      dispatch(actionResponseSuccess(FETCH_BUSINESS_SUCCESSFUL, response.data));
    })
    .catch((error) => {
      dispatch(actionResponseFailure(FETCH_BUSINESS_FAILED, error.response.data.message));
    });


/**
 * @description handle fetch one business
 * @param {object} id - id of the business
 * @returns {object} - returns fetched business success action or error
 */
export const fetchOneBusinessRequest = id => dispatch =>
  axios.get(`/api/v1/businesses/${id}`)
    .then((response) => {
      dispatch(actionResponseSuccess(FETCH_ONE_BUSINESS_SUCCESSFUL, response.data.businesses));
    })
    .catch((error) => {
      dispatch(actionResponseFailure(FETCH_BUSINESS_FAILED, error.response.data.message));
    });

/**
 * @description handles business update
 * @param {object} business - contains the business details
 * @param {object} cloudImageUrl - contains the image url
 * @returns {object} -return success or failure of business update action
 */
const updateBusiness = (business, cloudImageUrl) => (
  dispatch => (
    axios({
      method: 'PUT',
      url: `/api/v1/businesses/${business.id}`,
      data: {
        name: business.name,
        description: business.description,
        phoneNumber: business.phoneNumber,
        address: business.address,
        image: cloudImageUrl,
        location: business.location,
        category: business.category,
        website: business.website
      }
    })
      .then((response) => {
        dispatch(actionResponseSuccess(UPDATE_BUSINESS_SUCCESSFUL, response.data.business));
      })
      .catch((error) => {
        dispatch(actionResponseFailure(UPDATE_BUSINESS_FAILED, error.response.data.message));
      }))
);

/**
 * @description action to update a particular business image to cloudinary
 * @param {object} business - contains details of the business
 * @returns {object} success/failed image update
 */
export const updateBusinessRequest = business => (
  (dispatch) => {
    dispatch(isRequesting(IS_REQUESTING, true));
    let cloudImageUrl = business.currentImageSrc;

    if (!business.imageFile.name) {
      return dispatch(updateBusiness(business, cloudImageUrl));
    }

    const getdata = new FormData();
    getdata.append('file', business.imageFile);
    getdata.append('upload_preset', process.env.CLOUDINARY_PRESET);
    delete axios.defaults.headers.common.Authorization;
    return axios.post(process.env.CLOUDINARY_URL, getdata)
      .then(({ data }) => {
        const token = localStorage.getItem('jwtToken');
        axios.defaults.headers.common.Authorization = token;
        cloudImageUrl = data.secure_url;
        return dispatch(updateBusiness(business, cloudImageUrl));
      })
      .catch(() => {
        dispatch(actionResponseFailure(SAVE_IMAGE_FAILED, 'Failed to upload image. Try again'));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
  });


/**
 * @description action to delete a particular business
 * @param {object} id - id of the business
 * @returns {object} return success or failed business action
 */
export const deleteBusinessRequest = id => dispatch => axios.delete(`/api/v1/businesses/${id}`)
  .then((response) => {
    dispatch(actionResponseSuccess(DELETE_BUSINESS_SUCCESSFUL, response.data));
  })
  .catch((error) => {
    dispatch(actionResponseFailure(DELETE_BUSINESS_FAILED, error.response.data.message));
  });

  /**
 * @description action to delete a particular business
 * @param {object} businessId - id of the business
 * @param {number} userId - id of the logged in user
 * @returns {object} return success or failed business action
 */
export const likeRequest = (businessId, userId) => dispatch =>
  axios({
    method: 'POST',
    url: '/api/v1/auth/user/like',
    data: {
      businessId,
      userId,
    }
  })
    .then((response) => {
      dispatch(actionResponseSuccess(LIKE_SUCCESSFUL, response.data.message));
    })
    .catch(() => {
      dispatch(actionResponseFailure(LIKE_FAILED, 'Failed to Like'));
    });
