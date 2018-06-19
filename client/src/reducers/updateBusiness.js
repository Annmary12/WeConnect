import { UPDATE_BUSINESS_FAILED, UPDATE_BUSINESS_SUCCESSFUL } from '../actions/types';

const initialState = {
  business: {},
  isUpdated: false,
  hasError: false,
  error: ''
};

/**
 * @description holds success and failure states for updating
 * business
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } the new business state
 */
const UpdateBusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        business: action.business,
        isUpdated: true,
      };
    case UPDATE_BUSINESS_FAILED:
      return {
        ...state,
        error: action.error,
        hasError: true
      };
    default: return state;
  }
};
export default UpdateBusinessReducer;

