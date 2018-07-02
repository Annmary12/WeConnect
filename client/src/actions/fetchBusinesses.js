import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {
  FETCH_BUSINESS_SUCCESSFUL,
  FETCH_ONE_BUSINESS_SUCCESSFUL,
  UPDATE_BUSINESS_SUCCESSFUL,
  DELETE_BUSINESS_SUCCESSFUL,
  SAVE_IMAGE_SUCCESSFUL,
  SAVE_IMAGE_FAILED,
  FETCH_BUSINESS_FAILED,
  UPDATE_BUSINESS_FAILED,
  LIKE_FAILED,
  LIKE_SUCCESSFUL,
  ADD_BUSINESS
} from './types';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';

/**
 *
 * @param {object} business
 * @returns {object} business
 */
export function fetchOneBusinessSuccess(business) {
  return {
    type: FETCH_ONE_BUSINESS_SUCCESSFUL,
    business
  };
}

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
      dispatch(actionResponseSuccess(FETCH_BUSINESS_SUCCESSFUL, response.data.businesses));
    })
    .catch((error) => {
      throw (error);
    });


/**
 * @description handle fetch one business
 * @param {object} id - id of the business
 * @returns {object} - returns fetched business success action or error
 */
export const fetchOneBusinessRequest = id => dispatch =>
  axios.get(`/api/v1/businesses/${id}`)
    .then((response) => {
      dispatch(fetchOneBusinessSuccess(response.data.businesses));
    })
    .catch((error) => {
      throw (error);
    });

/**
 * @description  handles update business success action
 * @param {object} business - contains the details of the business
 * @returns {object} returns updated business action
 */
const updateBusinessSuccess = business => ({
  type: UPDATE_BUSINESS_SUCCESSFUL,
  business
});

/**
 * @description handles business failure action
 * @param {string} error - contains the error message
 * @returns {object} returns update  business error
 */
export function updateBusinessfailed(error) {
  return {
    type: UPDATE_BUSINESS_FAILED,
    error
  };
}

/**
 * @description handles image success action
 * @param {object} image - contains the url of the image
 * @returns {object} returns saved image action
 */
export function saveImageSuccessful(image) {
  return {
    type: SAVE_IMAGE_SUCCESSFUL,
    image
  };
}


/**
 * @description handles image failure action
 * @param {object} error - contains the error message
 * @returns {object} returns image failed action
 */
export function saveImageFailed(error) {
  return {
    type: SAVE_IMAGE_FAILED,
    error
  };
}
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
        dispatch(updateBusinessSuccess(response.data.business));
      })
      .catch((error) => {
        dispatch(updateBusinessfailed(error.response.data.message));
      }))
);

/**
 * @description action to update a particular business image to cloudinary
 * @param {object} business - contains details of the business
 * @returns {object} success/failed image update
 */
export const updateBusinessRequest = business => (
  (dispatch) => {
    dispatch(isRequesting(true));
    let cloudImageUrl = business.currentImageSrc;

    if (!business.imageFile.name) {
      return dispatch(updateBusiness(business, cloudImageUrl));
    }

    const data = new FormData();
    data.append('file', business.imageFile);
    data.append('upload_preset', process.env.CLOUDINARY_PRESET);
    delete axios.defaults.headers.common.Authorization;
    return axios.post(process.env.CLOUDINARY_URL, data)
      .then(({ data }) => {
        const token = localStorage.getItem('jwtToken');
        axios.defaults.headers.common.Authorization = token;
        cloudImageUrl = data.secure_url;
        // dispatch single action
        return dispatch(updateBusiness(business, cloudImageUrl));
      })
      .catch(() => {
        dispatch(saveImageFailed('Failed to upload image. Try again'));
        dispatch(isRequesting(false));
      });
  });

  /**
 * @description handles the delete business success action
 * @param {object} business - contains business details
 * @returns {object} return delete business message
 */
export function deleteBusiness(business) {
  return {
    type: DELETE_BUSINESS_SUCCESSFUL,
    business
  };
}

/**
 * @description action to delete a particular business
 * @param {object} id - id of the business
 * @returns {object} return success or failed business action
 */
export const deleteBusinessRequest = id => dispatch => axios.delete(`/api/v1/businesses/${id}`)
  .then((response) => {
    dispatch(deleteBusiness(response.data));
  })
  .catch((error) => {
    throw (error);
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
      // return console.log(response);
    })
    .catch((response) => {
      return console.log(response);
      dispatch(actionResponseFailure(LIKE_FAILED, error.data.message));
      
    });
