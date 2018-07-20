import {
  FETCH_ONE_BUSINESS_SUCCESSFUL,
  DELETE_BUSINESS_SUCCESSFUL,
  LIKE_FAILED,
  LIKE_SUCCESSFUL
} from '../actions/types';

const initialState = {
  business: {},
  isDeleted: false,
  message: '',
  error: ''
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
        business: action.payload
      };

    case DELETE_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        isDeleted: true,
        message: action.payload
      };

    case LIKE_SUCCESSFUL:
      return {
        ...state,
        message: action.payload
      };

    case LIKE_FAILED:
      return {
        ...state,
        error: action.error
      };

    default: return state;
  }
};
export default BusinessReducer;

