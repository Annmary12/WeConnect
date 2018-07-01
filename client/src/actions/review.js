import axios from 'axios';
import { REVIEW_SUCCESSFUL, REVIEW_FAILED, ALL_REVIEW } from './types';

/**
 * @description handles success review action
 * @param {object} message - contains a successful message
 * @returns {object} returns success review action
 */
export function reviewSuccessful(message) {
  return {
    type: REVIEW_SUCCESSFUL,
    message
  };
}

/**
 * @description handles failure review action
 * @param {object} error - contains the error message
 * @returns {object} returns error review action
 */
export function reviewFailed(error) {
  return {
    type: REVIEW_FAILED,
    error
  };
}

/**
 * @description handle creating a review
 * @param {object} review  - contains the review details
 * @param {number} id - contains the id of the business
 * @returns {object} returns success or failed review action
 */
export const reviewRequest = (review, id) => dispatch =>
  axios.post(`/api/v1/businesses/${id}/reviews`, review)
    .then(() => {
      // console.log();
      dispatch(reviewSuccessful('Saved Successful'));
    })
    .catch((error) => {
      dispatch(reviewFailed(error.response.data.message));
    });

/**
 * @description handles get all review action
 * @param {object} reviews - contains the review details
 * @returns {object} reviews
 */
export function allReviews(reviews) {
  return {
    type: ALL_REVIEW,
    reviews
  };
}

/**
 * @description handles fetch all reviews for a business
 * @param {number} id  - contains the id of the business
 * @returns {object} return all reviews action or error
 */
export const getReviewRequest = id => dispatch =>
  axios.get(`/api/v1/businesses/${id}/reviews`)
    .then((response) => {
      dispatch(allReviews(response.data.reviews));
    })
    .catch((error) => {
      throw (error);
    });

