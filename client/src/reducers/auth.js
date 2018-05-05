import SET_CURRENT_USER, { SIGNUP_FAILED } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action = {} ) => {
    switch(action.type) {
        case SET_CURRENT_USER:
        return  {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        case SIGNUP_FAILED:
    
        default: 
           return state;
    }
   
}