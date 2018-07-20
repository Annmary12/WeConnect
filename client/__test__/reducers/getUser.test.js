import userReducer from '../../src/reducers/getUser';
import {
  GET_USER_SUCCESS, GET_USER_FAILURE, USER_UPDATE_SUCCESSFUL,
  USER_UPDATE_FAILURE, IS_REQUESTING
} from '../../src/actions/types';


describe('user reducer', () => {
  const intialState = {
    user: {},
    error: '',
    isLoading: false,
    message: ''
  };

  let payload;
  let bool;

  it('it should handle IS_REQUESTING', () => {
    bool = true;
    const action = {
      type: IS_REQUESTING,
      bool
    };

    const newState = userReducer(intialState, action);
    expect(newState.isLoading).toEqual(bool);
  });
  payload = {
    firstname: 'Annmary',
    lastname: 'Agunanna',
    email: 'annmaryamaka@gmail.com'
  };
  it('should handle GET_USER_SUCCESS', () => {
    const action = {
      type: GET_USER_SUCCESS,
      payload
    };

    const newState = userReducer(intialState, action);
    expect(newState.user.firstname).toEqual(payload.firstname);
    expect(newState.user.lastname).toEqual(payload.lastname);
    expect(newState.user.email).toEqual(payload.email);
  });

  it('should handle GET_USER_FAILURE', () => {
    const error = 'Failed to get user';
    const action = {
      type: GET_USER_FAILURE,
      error
    };

    const newState = userReducer(intialState, action);
    expect(newState.error).toEqual(error);
  });

  it('should handle USER_UPDATE_SUCCESSFUL', () => {
    payload = 'Updated Successfully';
    bool = false;
    const action = {
      type: USER_UPDATE_SUCCESSFUL,
      payload,
      bool
    };

    const newState = userReducer(intialState, action);
    expect(newState.message).toEqual(payload);
    expect(newState.isLoading).toEqual(false);
  });

  it('should handle USER_UPDATE_FAILURE', () => {
    const error = 'Failed to update user';
    bool = false;
    const action = {
      type: USER_UPDATE_FAILURE,
      error,
      bool
    };

    const newState = userReducer(intialState, action);
    expect(newState.error).toEqual(error);
    expect(newState.isLoading).toEqual(bool);
  });

  it('should handle intial state', () => {
    const newState = userReducer(intialState, {});
    expect(newState).toEqual(intialState);
  })
});

