import { ALL_REVIEW } from '../actions/types';

/**
 * @description holds all reviews,
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } fetch all review action state
 */
export default (state = {}, action = {}) => {
  switch (action.type) {
    case ALL_REVIEW:
      return {
        reviews: action.reviews.reviews,
        totalReview: action.reviews.totalReview
      };

    default: return state;
  }
};
