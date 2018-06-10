import { IS_REQUESTING, CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from '../actions/types';

const initialState = {
  isCreated: false,
  hasError: false,
  error: '',
  isLoading: false
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
        isCreated: true,
        hasError: false
      };

    case CREATE_BUSINESS_FAILED:
      return {
        ...state,
        hasError: true,
        error: action.error,
      };

    default: return state;
  }
};
