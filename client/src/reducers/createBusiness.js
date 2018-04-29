import { CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from '../actions/types';

const initialState = [{
    response: ' ',
    error: ' ',
    isCreated: false
}]

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_BUSINESS_SUCCESSFUL:
            return [{
                response: action.response,
                error: '',
                isCreated: true,
            }, ...state];

            case CREATE_BUSINESS_FAILED:
            return [{
                response: '',
                error: action.error,
                isCreated: false,
            }, ...state];
            
            default: return state;
    }
};