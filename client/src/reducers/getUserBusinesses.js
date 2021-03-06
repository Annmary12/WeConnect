import {
  IS_REQUESTING,
  USER_BUSINESSES_SUCCESS,
  USER_BUSINESSES_FAILURE
} from '../actions/types';

const initialState = {
  businesses: [],
  error: '',
  isLoading: false,
  limit: 0,
  totalPages: 0,
  currentPage: 0,
  totalBusiness: 0
};

/**
 * @description holds success, failure and loading states for fetching
 * business
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } the new business state
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_REQUESTING:
      return {
        ...state,
        isLoading: action.bool
      };
    case USER_BUSINESSES_SUCCESS:
      return {
        ...state,
        businesses: action.payload.businesses,
        limit: action.payload.limit,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        totalBusiness: action.payload.numberOfBusinesses,
        error: ''
      };
    case USER_BUSINESSES_FAILURE:
      return {
        ...state,
        businesses: [],
        error: action.error
      };

    default: return state;
  }
};
