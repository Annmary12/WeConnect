import { GET_USER_SUCCESS, GET_USER_FAILURE } from '../actions/types';

const intialState = {
  user: {},
  error: ''
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
    default: return state;
  }
};
