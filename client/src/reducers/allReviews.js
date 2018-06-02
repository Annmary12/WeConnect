import { ALL_REVIEW } from '../actions/types';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case ALL_REVIEW:
      return {
        reviews: action.reviews
      };

    default: return state;
  }
};
