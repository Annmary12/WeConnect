import {
  IS_REQUESTING,
  USER_BUSINESSES_SUCCESS,
  USER_BUSINESSES_FAILURE
} from '../actions/types';

const initialState = {
  businesses: [],
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
    case USER_BUSINESSES_SUCCESS:
      return {
        ...state,
        businesses: action.payload
      };
    case USER_BUSINESSES_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default: return state;
  }
};
