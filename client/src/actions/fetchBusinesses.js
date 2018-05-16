import axios from 'axios';
import { FETCH_BUSINESS_SUCCESSFUL, FETCH_ONE_BUSINESS_SUCCESSFUL, UPDATE_BUSINESS_SUCCESSFUL, DELETE_BUSINESS_SUCCESSFUL } from './types';

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

