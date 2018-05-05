import { SET_CURRENT_USER, SIGNUP_FAILED } from '../actions/types';
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
      user: action.user
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