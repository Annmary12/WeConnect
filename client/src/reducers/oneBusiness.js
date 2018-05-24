import { 
    // UPDATE_BUSINESS_SUCCESSFUL, 
    FETCH_ONE_BUSINESS_SUCCESSFUL, DELETE_BUSINESS_SUCCESSFUL 
  } from '../actions/types';
  
  const initialState = {
    business: {},
    isUpdated: false,
    isDeleted: false,
  };
  
  const BusinessReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ONE_BUSINESS_SUCCESSFUL:
        return {
          business: action.businesses
        };
      // case UPDATE_BUSINESS_SUCCESSFUL:
      //   return {
      //     updatedBusiness: action.business,
      //     isUpdated: true
      //   };
      case DELETE_BUSINESS_SUCCESSFUL:
        return {
          isDeleted: true
        };
      default: return state;
    }
  };
  export default BusinessReducer;
  