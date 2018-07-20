import businessReducer from '../../src/reducers/oneBusiness';
import {
  FETCH_ONE_BUSINESS_SUCCESSFUL,
  DELETE_BUSINESS_SUCCESSFUL,
  LIKE_FAILED,
  LIKE_SUCCESSFUL
} from '../../src/actions/types';

describe('one business reducer', () => {
  const initialState = {
    business: {},
    isDeleted: false,
    message: '',
    error: ''
  };

  it('should handle FETCH_ONE_BUSINESS_SUCCESSFUL', () => {
    const payload = {
      name: 'wecconnect',
      location: 'Abuja'
    };
    const action = {
      type: FETCH_ONE_BUSINESS_SUCCESSFUL,
      payload
    };
    const newState = businessReducer(initialState, action);
    expect(newState.business.name).toEqual(payload.name);
    expect(newState.business.location).toEqual(payload.location);
  });

  it('should handle DELETE_BUSINESS_SUCCESSFUL', () => {
    const isDeleted = true;
    const payload = 'Deleted Succesfully';
    const action = {
      type: DELETE_BUSINESS_SUCCESSFUL,
      payload
    };
    const newState = businessReducer(initialState, action);
    expect(newState.isDeleted).toEqual(isDeleted);
    expect(newState.message).toEqual(payload);
  });

  it('should handle LIKE_SUCCESSFUL', () => {
    const payload = 'Like sucessfully';
    const action = {
      type: LIKE_SUCCESSFUL,
      payload
    };
    const newState = businessReducer(initialState, action);
    expect(newState.message).toEqual(payload);
  });

  it('should handle LIKE_FAILED', () => {
    const error = 'Like Failed';
    const action = {
      type: LIKE_FAILED,
      error
    };
    const newState = businessReducer(initialState, action);
    expect(newState.error).toEqual(error);
  });

  it('should handle initial state', () => {
    const newState = businessReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
