import {
  FETCH_ONE_BUSINESS_SUCCESSFUL,
  DELETE_BUSINESS_SUCCESSFUL
} from '../actions/types';

const initialState = {
  business: {},
  isDeleted: false,
};

/**
 * @description holds success and failure states for fetching,
 * and deleting business
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } the new business state
 */
const BusinessReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ONE_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        business: action.businesses
      };

    case DELETE_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        isDeleted: true
      };
    default: return state;
  }
};
export default BusinessReducer;

