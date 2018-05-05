import { CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from '../actions/types';

const initialState = {
    isCreated: '',
    response: ' ',
    error: ' '
    
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_BUSINESS_SUCCESSFUL:
            return [{
                isCreated: true,
                response: action.response,
                error: '',
                
            }, ...state];

        case CREATE_BUSINESS_FAILED:
            return [{
                isCreated: false,
                response: '',
                error: action.error,
                
            }, ...state];
            
            default: return state;
    }
};