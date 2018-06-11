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
  UPDATE_BUSINESS_FAILED
} from './types';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';

/**
 * @description action to fetch all businesses
 * @param {*}
 * @returns {Array} businesses
 */
export const fetchBusinessesRequest = () => dispatch =>
  axios.get('/api/v1/businesses')
    .then((response) => {
      dispatch(actionResponseSuccess(FETCH_BUSINESS_SUCCESSFUL, response.data.businesses));
    })
    .catch((error) => {
      dispatch(actionResponseFailure(FETCH_BUSINESS_FAILED, error.response.data.message));
    });

/**
 * @description action to fetch all businesses
 * @param {object} searchType
 * @returns {object} userData
 */
export const searchBusinessesRequest = (searchType, value) => dispatch =>
  axios.get(`/api/v1/businesses?${searchType}=${value}`)
    .then((response) => {
      dispatch(fetchBusinessSuccess(response.data.businesses));
    })
    .catch((error) => {
      throw (error);
    });

/**
 *
 * @param {object} business
 * @returns {object} business
 */
export function fetchOneBusinessSuccess(businesses) {
  return {
    type: FETCH_ONE_BUSINESS_SUCCESSFUL,
    businesses
  };
}

/**
 * @description action to fetch a particular business
 * @param {object} id
 * @returns {object} id
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
 *
 * @param {object} business
 * @returns {object} update business
 */
const updateBusinessSuccess = business => ({
  type: UPDATE_BUSINESS_SUCCESSFUL,
  business
});

/**
 *
 * @param {object} error
 * @returns {object} update error
 */
export function updateBusinessfailed(error) {
  return {
    type: UPDATE_BUSINESS_FAILED,
    error
  };
}

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
 * @description action to update a particular business
 * @param {object} business
 * @returns {object} business
 */
export const updateBusinessRequest = business => (
  (dispatch) => {
    dispatch(isRequesting(true));
    // const { CLOUDINARY_URL, CLOUDINARY_PRESET, DEFAULT_IMAGE } = process.env;
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
 *
 * @param {object} business
 * @returns {object} delete business
 */
export function deleteBusiness(business) {
  return {
    type: DELETE_BUSINESS_SUCCESSFUL,
    business
  };
}

/**
 * @description action to delete a particular business
 * @param {object} id
 * @returns {object} business
 */
export const deleteBusinessRequest = id => dispatch => axios.delete(`/api/v1/businesses/${id}`)
  .then((response) => {
    dispatch(deleteBusiness(response.data));
  })
  .catch((error) => {
    throw (error);
  });

  /**
 *
 * @param {object} image
 * @returns {object} save image
 */
export function saveImageSuccessful(image) {
  return {
    type: SAVE_IMAGE_SUCCESSFUL,
    image
  };
}


/**
 *
 * @param {object} error
 * @returns {object} inage failed
 */
export function saveImageFailed(error) {
  return {
    type: SAVE_IMAGE_FAILED,
    error
  };
}
