import userBusinessReducer from '../../src/reducers/getUserBusinesses';
import {
  IS_REQUESTING,
  USER_BUSINESSES_SUCCESS,
  USER_BUSINESSES_FAILURE
} from '../../src/actions/types';

describe('user business reducer', () => {
  const initialState = {
    businesses: [],
    error: '',
    isLoading: false,
    limit: '',
    totalPages: '',
    currentPage: '',
    totalBusiness: ''
  };

  it('should handle IS_REQUESTING', () => {
    const bool = true;
    const action = {
      type: IS_REQUESTING,
      bool
    };

    const newState = userBusinessReducer(initialState, action);
    expect(newState.isLoading).toEqual(bool);
  });

  it('should handle USER_BUSINESSES_SUCCESS', () => {
    const payload = {
      businesses: [
        {
          name: 'wecconnet',
          location: 'Abuja'
        },

        {
          name: 'Smart Hub',
          location: 'Lagos'
        }
      ],
      limit: '6',
      totalPages: '1',
      currentPage: '1',
      numberOfBusinesses: '6'
    };
    const action = {
      type: USER_BUSINESSES_SUCCESS,
      payload
    };

    const newState = userBusinessReducer(initialState, action);
    expect(newState.businesses[0].name).toEqual(payload.businesses[0].name);
    expect(newState.limit).toEqual(payload.limit);
    expect(newState.totalPages).toEqual(payload.totalPages);
    expect(newState.currentPage).toEqual(payload.currentPage);
    expect(newState.totalBusiness).toEqual(payload.numberOfBusinesses);
  });

  it('should handle USER_BUSINESSES_FAILURE', () => {
    const error = 'Failed to get business(es)';
    const action = {
      type: USER_BUSINESSES_FAILURE,
      error
    };

    const newState = userBusinessReducer(initialState, action);
    expect(newState.error).toEqual(error);
  });

  it('should handle initial state', () => {
    const newState = userBusinessReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});

