import { GET_USER_SUCCESS, GET_USER_FAILURE } from '../actions/types';

const intialState = {
  user: {},
  error: ''
};

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
