import { IS_REQUESTING, CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from '../actions/types';

const initialState = {
  hasError: false,
  isCreated: false,
  error: '',
  isLoading: false,
  successMessage: ''
};

/**
 * @description holds success and failure states for creating a new business
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } the new create business action state
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_REQUESTING:
      return {
        ...state,
        isLoading: action.bool
      };
    case CREATE_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        isLoading: action.bool,
        successMessage: action.payload,
        isCreated: true
      };

    case CREATE_BUSINESS_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: action.bool,
        error: action.error,
      };

    default: return state;
  }
};
