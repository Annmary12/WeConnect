import { GET_USER_SUCCESSFUL,  GET_USER_FAILED} from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
      case GET_USER_SUCCESSFUL:
        return {
          user: action.user,
        };
      case GET_USER_FAILED:
        return {
          error: action.error,
        };
  
      default: return state;
    }
  };