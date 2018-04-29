import { combineReducers } from 'redux';

 // import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import addBusiness from './reducers/business';
import createBusiness from './reducers/createBusiness';

export default combineReducers({
    auth,
    addBusiness,
    createBusiness
});