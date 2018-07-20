import updateBusinessReducer from '../../src/reducers/updateBusiness';
import { UPDATE_BUSINESS_FAILED, UPDATE_BUSINESS_SUCCESSFUL } from '../../src/actions/types';

describe('update business reducer', () => {
  const initialState = {
    business: {},
    isUpdated: false,
    hasError: false,
    error: ''
  };

  it('should handle UPDATE_BUSINESS_SUCCESSFUL', () => {
    const isUpdated = true;
    const payload = {
      name: 'Wecconect',
      description: 'wecconnect description',
      location: 'Lagos'
    };
    const action = {
      type: UPDATE_BUSINESS_SUCCESSFUL,
      payload
    };
    const newState = updateBusinessReducer(initialState, action);
    expect(newState.business.name).toEqual(payload.name);
    expect(newState.business.description).toEqual(payload.description);
    expect(newState.business.location).toEqual(payload.location);
    expect(newState.isUpdated).toEqual(isUpdated);
  });

  it('should handle UPDATE_BUSINESS_FAILED', () => {
    const error = '';
    const hasError = true;
    const action = {
      type: UPDATE_BUSINESS_FAILED,
      error
    };
    const newState = updateBusinessReducer(initialState, action);
    expect(newState.error).toEqual(error);
    expect(newState.hasError).toEqual(hasError);
  });

  it('should handle initial state', () => {
    const newState = updateBusinessReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

});
