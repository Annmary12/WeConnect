import axios from 'axios';
import { REVIEW_SUCCESSFUL, REVIEW_FAILED, ALL_REVIEW } from './types';

/**
 *
 * @param {object} message
 * @returns {object} message
 */
export function reviewSuccessful(message) {
    return {
        type: REVIEW_SUCCESSFUL,
        message
    };
}

/**
 *
 * @param {object} error
 * @returns {object} error
 */
export function reviewFailed(error) {
    return {
        type: REVIEW_FAILED,
        error
    };
}

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
 *
 * @param {object} error
 * @returns {object} error
 */
export function allReviews(reviews) {
    return {
        type: ALL_REVIEW,
        reviews
    };
}

export const getReviewRequest = id => dispatch => 
axios.get(`/api/v1/businesses/${id}/reviews`)
.then((response) => {
    dispatch(allReviews(response.data.reviews))
})
.catch((error) => {
    throw(error);
})

        