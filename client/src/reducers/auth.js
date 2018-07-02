import isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_USER, SIGNUP_FAILED, LOGIN_FAILED } from '../actions/types';


const initialState = {
  isAuthenticated: false,
  user: {},
  error: '',
  hasError: false
};

/**
 * @description holds authentication check, current user state and failure states
 * of login/signup actions
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } the new user state
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user.payload,
        hasError: false
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
