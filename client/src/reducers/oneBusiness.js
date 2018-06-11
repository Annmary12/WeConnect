import {
  FETCH_ONE_BUSINESS_SUCCESSFUL,
  DELETE_BUSINESS_SUCCESSFUL
} from '../actions/types';

const initialState = {
  business: {},
  isDeleted: false,
};

const BusinessReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ONE_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        business: action.businesses
      };

    case DELETE_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        isDeleted: true
      };
    default: return state;
  }
};
export default BusinessReducer;

