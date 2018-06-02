import { UPDATE_BUSINESS_FAILED, UPDATE_BUSINESS_SUCCESSFUL } from '../actions/types';

const initialState = {
  business: {},
  isUpdated: false,
  hasError: false,
  error: ''
};

const UpdateBusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        business: action.business,
        isUpdated: true,
      };
    case UPDATE_BUSINESS_FAILED:
      return {
        ...state,
        error: action.error,
        hasError: true
      };
    default: return state;
  }
};
export default UpdateBusinessReducer;

