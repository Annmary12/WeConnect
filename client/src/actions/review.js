import axios from 'axios';
import { REVIEW_SUCCESSFUL, REVIEW_FAILED, ALL_REVIEW } from './types';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';

/**
 * @description handle creating a review
 * @param {object} review  - contains the review details
 * @param {number} id - contains the id of the business
 * @returns {object} returns success or failed review action
 */
export const reviewRequest = (review, id) => dispatch =>
  axios.post(`/api/v1/businesses/${id}/reviews`, review)
    .then(() => {
      dispatch(actionResponseSuccess(REVIEW_SUCCESSFUL, 'Saved Successful'));
    })
    .catch((error) => {
      dispatch(actionResponseFailure(REVIEW_FAILED, error.response.data.message));
    });

/**
 * @description handles fetch all reviews for a business
 * @param {number} id  - contains the id of the business
 * @returns {object} return all reviews action or error
 */
export const getReviewRequest = id => dispatch =>
  axios.get(`/api/v1/businesses/${id}/reviews`)
    .then((response) => {
      dispatch(actionResponseSuccess(ALL_REVIEW, response.data));
    })
    .catch((error) => {
      throw (error);
    });

