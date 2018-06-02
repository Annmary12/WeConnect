import {
  REVIEW_SUCCESSFUL,
  REVIEW_FAILED
} from '../actions/types';

const initialState = {
  message: '',
  error: '',
  isCreated: false,
  hasError: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REVIEW_SUCCESSFUL:
      return {
        ...state,
        message: action.message,
        isCreated: true,
      };

    case REVIEW_FAILED:
      return {
        ...state,
        error: action.error,
        hasError: true
      };

    default: return state;
  }
};
