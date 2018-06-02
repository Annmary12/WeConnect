import { CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from '../actions/types';

const initialState = {
  isCreated: false,
  hasError: false,
  error: ' '
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        isCreated: true,
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
