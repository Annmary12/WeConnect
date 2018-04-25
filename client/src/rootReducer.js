import { combineReducers } from 'redux';

 // import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import addBusiness from './reducers/business';

export default combineReducers({
    auth,
    addBusiness
});