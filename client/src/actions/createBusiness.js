import axios from 'axios';
import { CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from './types';

/**
 *
 * @param {object} response
 * @returns {object} response
 */
export function createBusinessResponse() {
  return {
    type: CREATE_BUSINESS_SUCCESSFUL,
  };
}

/**
 *
 * @param {object} error
 * @returns {object} error
 */
export function createBusinessError(error) {
  return {
    type: CREATE_BUSINESS_FAILED,
    error
  };
}

/**
 * @description action to create a new business
 * @param {object} userData
 * @returns {object} userData
 */
export const createBusinessRequest = business => dispatch => axios.post('api/v1/businesses/', business)
  .then(() => {
    dispatch(createBusinessResponse());
  }).catch((error) => {
    dispatch(createBusinessError(error));
  });
