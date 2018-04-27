import { CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from '../actions/types';

const initialState = [{
    createData: {},
    response: ' ',
    error: ' ',
    isCreated: ''
}]

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_BUSINESS_SUCCESSFUL:
            return [{
                createData: {},
                response: action.response,
                error: '',
                isCreated: true,
            }, ...state];

            case CREATE_BUSINESS_FAILED:
            return [{
                createData: {},
                response: '',
                error: action.error,
                isCreated: false
            }, ...state];
            
            default: return state;
    }
};