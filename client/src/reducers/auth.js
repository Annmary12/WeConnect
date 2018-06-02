import isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_USER, SIGNUP_FAILED, LOGIN_FAILED } from '../actions/types';


const initialState = {
  isAuthenticated: false,
  user: {},
  error: '',
  hasError: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        hasError: true,
        error: action.error,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        error: action.error,
        hasError: true,

      };

    default:
      return state;
  }
};
