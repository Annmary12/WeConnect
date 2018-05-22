import { SET_CURRENT_USER, SIGNUP_FAILED, LOGIN_FAILED } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: '',
  hasError: false
};

export default (state = initialState, action = {} ) => {
  switch(action.type) {
    case SET_CURRENT_USER:
    return  {
      isAuthenticated: !isEmpty(action.user),
      user: action.user,
      hasError: false
    };
    case LOGIN_FAILED:
    return {
      hasError: true,
      error: action.error,
      isAuthenticated: false
    };
    case SIGNUP_FAILED:
    return {
      error: action.error,
      hasError: true,
      
    }

    default: 
      return state;
  }
}