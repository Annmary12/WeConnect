import { ALL_REVIEW } from '../actions/types';

const initialState = {
  reviews: {},
  totalReview: 0,
};
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
        reviews: action.payload.reviews,
        totalReview: action.payload.totalReview
      };

    default: return state;
  }
};
