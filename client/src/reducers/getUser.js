import {
  GET_USER_SUCCESS, GET_USER_FAILURE, USER_UPDATE_SUCCESSFUL,
  USER_UPDATE_FAILURE, IS_REQUESTING
} from '../actions/types';

const intialState = {
  user: {},
  error: '',
  isLoading: false,
  message: ''
};
/**
 * @description holds success and failure states for fetching a
 * user profile
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } the user profile details state
 */
export default (state = intialState, action = {}) => {
  switch (action.type) {
    case IS_REQUESTING:
      return {
        ...state,
        isLoading: action.bool
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case USER_UPDATE_SUCCESSFUL:
      return {
        ...state,
        message: action.payload,
        isLoading: action.bool
      };
    case USER_UPDATE_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: action.bool
      };
    default: return state;
  }
};
