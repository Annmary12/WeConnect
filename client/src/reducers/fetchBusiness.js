import { FETCH_BUSINESS_SUCCESSFUL, FETCH_BUSINESS_FAILED} from '../actions/types';

const initialState = {
  businesses: [],
  isUpdated: false,
  isDeleted: false,
};

const BusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS_SUCCESSFUL:
      return {
        ...state,
        businesses: action.payload
      };
    case FETCH_BUSINESS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
};
export default BusinessReducer;
