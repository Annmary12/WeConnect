import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {
  FETCH_BUSINESS_SUCCESSFUL,
  FETCH_ONE_BUSINESS_SUCCESSFUL,
  UPDATE_BUSINESS_SUCCESSFUL,
  DELETE_BUSINESS_SUCCESSFUL,
  SAVE_IMAGE_SUCCESSFUL,
  SAVE_IMAGE_FAILED
} from './types';

/**
 *
 * @param {object} businesses
 * @returns {object} businesses
 */
export function fetchBusinessSuccess(businesses) {
  return {
    type: FETCH_BUSINESS_SUCCESSFUL,
    businesses
  };
}

/**
 * @description action to fetch all businesses
 * @param {object} userData
 * @returns {object} userData
 */
export const fetchBusinessesRequest = () => dispatch =>
  axios.get('/api/v1/businesses')
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
export function updateBusiness(business) {
  return {
    type: UPDATE_BUSINESS_SUCCESSFUL,
    business
  };
}

/**
 * @description action to update a particular business
 * @param {object} business
 * @returns {object} business
 */
export const updateBusinessRequest = business => dispatch => axios.put(`/api/v1/businesses/${business.id}`, business)
  .then((response) => {
    dispatch(updateBusiness(response.data.business));
  })
  .catch((error) => {
    throw (error);
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

/**
 * @description action to upload image
 * @param {object} image
 * @returns {object} business
 */
export function saveImageCloudinary(image) {
  const { CLOUDINARY_URL } = process.env;
  const PRESET = process.env.CLOUDINARY_PRESET;
  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', 'yts85sou');
  delete axios.defaults.headers.common.Authorization;
  return dispatch => axios.post('https://api.cloudinary.com/v1_1/annmary/image/upload/', data)
    .then(({data}) => {
      const token = localStorage.getItem('jwtToken');
      axios.defaults.headers.common.Authorization = token;
      dispatch(saveImageSuccessful(data.secure_url));
    })
    .catch(() => {
      dispatch(saveImageFailed('Sorry, your image failed to upload'));
    });
}

