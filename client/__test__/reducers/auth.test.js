import authReducer from '../../src/reducers/auth';
import { SET_CURRENT_USER, SIGNUP_FAILED, LOGIN_FAILED } from '../../src/actions/types';

describe('Auth Reducer', () => {
  const initialState = {
    isAuthenticated: false,
    user: {},
    error: '',
    hasError: false
  };
  it('should handle SET_CURRENT_USER', () => {
    const user = {
      payload: {
        id: 1,
        name: 'Annmary',
        email: 'annmaryamaka@gmail.com'
      }
    };
    const action = {
      type: SET_CURRENT_USER,
      user
    };

    const newState = authReducer(initialState, action);
    expect(newState.isAuthenticated).toEqual(true);
    expect(newState.user.email).toEqual('annmaryamaka@gmail.com');
    expect(newState.user.name).toEqual('Annmary');
  });

  it('should handle LOGIN_FAILED ', () => {
    const error = 'Failed to login';
    const action = {
      type: LOGIN_FAILED,
      error
    };

    const newState = authReducer(initialState, action);
    expect(newState.hasError).toEqual(true);
    expect(newState.error).toEqual('Failed to login');
  });

  it('should handle SIGNUP_FAILED', () => {
    const error = 'Failed to Register';
    const action = {
      type: SIGNUP_FAILED,
      error
    };

    const newState = authReducer(initialState, action);
    expect(newState.hasError).toEqual(true);
    expect(newState.error).toEqual('Failed to Register');
  });

  it('should handle initial state', () => {
    const newState = authReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
