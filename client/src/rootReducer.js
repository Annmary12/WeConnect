import { combineReducers } from 'redux';
import auth from './reducers/auth';
import createBusiness from './reducers/createBusiness';
import BusinessReducer from './reducers/fetchBusiness';


const rootReducer = combineReducers({
  auth,
  createBusiness,
  BusinessReducer
});
export default rootReducer;