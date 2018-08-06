import { combineReducers } from 'redux';
import auth from './reducers/auth';
import createBusiness from './reducers/createBusiness';
import BusinessReducer from './reducers/fetchBusiness';
import ReviewReducer from './reducers/review';
import OneBusiness from './reducers/oneBusiness';
import getUser from './reducers/getUser';
import updateBusiness from './reducers/updateBusiness';
import userBusinesses from './reducers/getUserBusinesses';


const rootReducer = combineReducers({
  auth,
  createBusiness,
  BusinessReducer,
  ReviewReducer,
  OneBusiness,
  getUser,
  updateBusiness,
  userBusinesses
});
export default rootReducer;
