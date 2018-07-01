import { FETCH_BUSINESS_SUCCESSFUL, FETCH_BUSINESS_FAILED } from '../actions/types';

const initialState = {
  businesses: [],
  isUpdated: false,
  isDeleted: false,
};

/**
 * @description holds success and failure states for fetching
 * a business
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } the new business state
 */
const BusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        businesses: action.payload
      };
    case FETCH_BUSINESS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
};
export default BusinessReducer;
