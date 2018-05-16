import { FETCH_BUSINESS_SUCCESSFUL, FETCH_ONE_BUSINESS_SUCCESSFUL, UPDATE_BUSINESS_SUCCESSFUL, DELETE_BUSINESS_SUCCESSFUL } from '../actions/types';

const initialState = {
  businesses: [],
  isUpdated: false,
};

const BusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS_SUCCESSFUL:
      return {
        businesses: action.businesses
      };
    case FETCH_ONE_BUSINESS_SUCCESSFUL:
      return {
        oneBusiness: action.businesses
      };
    case UPDATE_BUSINESS_SUCCESSFUL:
      return {
        updatedBusiness: action.business,
        isUpdated: true
      };
    case DELETE_BUSINESS_SUCCESSFUL:
      return {
        message: action.message
      };
    default: return state;
  }
};
export default BusinessReducer;
