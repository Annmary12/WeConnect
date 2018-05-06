import { combineReducers } from 'redux';
import auth from './reducers/auth';
import createBusiness from './reducers/createBusiness';

export default combineReducers({
  auth,
  createBusiness
});
