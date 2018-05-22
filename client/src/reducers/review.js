import { REVIEW_SUCCESSFUL, REVIEW_FAILED } from '../actions/types';

const initialState = {
    message: '',
    error: '',
    isCreated: false,
    hasError: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case REVIEW_SUCCESSFUL:
            return {
                message: action.message,
                error: '',
                isCreated: true,
                hasError: false
            };

        case REVIEW_FAILED:
            return {
                message: '',
                error: action.error,
                isCreated: false,
                hasError: true
            };

        default: return state;

    }
}