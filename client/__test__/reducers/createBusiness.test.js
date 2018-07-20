import createBusinessReducer from '../../src/reducers/createBusiness';
import { IS_REQUESTING, CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from '../../src/actions/types';

describe('create business', () => {
  const initialState = {
    hasError: false,
    isCreated: false,
    error: '',
    isLoading: false,
    successMessage: ''
  };

  it('should handle IS_REQUESTING', () => {
    const bool = false;
    const action = {
      type: IS_REQUESTING,
      bool
    };

    const newState = createBusinessReducer(initialState, action);
    expect(newState.isLoading).toEqual(false);
  });

  it('should handle CREATE_BUSINESS_SUCCESSFUL', () => {
    const payload = 'Successsfully created';
    const bool = false;
    const action = {
      type: CREATE_BUSINESS_SUCCESSFUL,
      payload,
      bool
    };

    const newState = createBusinessReducer(initialState, action);
    expect(newState.isLoading).toEqual(false);
    expect(newState.successMessage).toEqual(payload);
    expect(newState.isCreated).toEqual(true);
  });

  it('should handle CREATE_BUSINESS_FAILED', () => {
    const error = 'Failed';
    const hasError = true;
    const bool = false;
    const action = {
      type: CREATE_BUSINESS_FAILED,
      error,
      bool
    };

    const newState = createBusinessReducer(initialState, action);
    expect(newState.hasError).toEqual(hasError);
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toEqual(error);
  });

  it('should handle initial state', () => {

    const newState = createBusinessReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
