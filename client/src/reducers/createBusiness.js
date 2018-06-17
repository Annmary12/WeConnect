import { IS_REQUESTING, CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from '../actions/types';

const initialState = {
  hasError: false,
  isCreated: false,
  error: '',
  isLoading: false,
  successMessage: ''
};

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
