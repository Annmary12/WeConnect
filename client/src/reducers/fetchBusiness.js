import { FETCH_BUSINESS_SUCCESSFUL, FETCH_ONE_BUSINESS_SUCCESSFUL } from '../actions/types';

const initialState = {
    businesses: []
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

        default: return state;
            
    }
}
export default BusinessReducer;