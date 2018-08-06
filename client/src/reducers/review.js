import {
  REVIEW_SUCCESSFUL,
  REVIEW_FAILED,
  ALL_REVIEW
} from '../actions/types';

const initialState = {
  message: '',
  error: '',
  isCreated: false,
  hasError: false,
  reviews: [],
  totalReview: 0,
};

/**
 * @description holds success and failure states for fetching,
 * and submitting a review
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } the new review state
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REVIEW_SUCCESSFUL:
      return {
        ...state,
        message: action.payload,
        isCreated: true,
      };

    case REVIEW_FAILED:
      return {
        ...state,
        error: action.error,
        hasError: true,
        reviews: []
      };

    case ALL_REVIEW:
      return {
        reviews: action.payload.reviews,
        totalReview: action.payload.totalReview
      };

    default: return state;
  }
};
