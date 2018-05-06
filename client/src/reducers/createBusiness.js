import { CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from '../actions/types';

const initialState = {
  isCreated: false,
  hasError: false,
  error: ' '
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_BUSINESS_SUCCESSFUL:
      return [{
        isCreated: true,
        hasError: false,
        error: '',

      }, ...state];

    case CREATE_BUSINESS_FAILED:
      return [{
        isCreated: false,
        hasError: true,
        error: action.error,

      }, ...state];

    default: return state;
  }
};
