import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import jwtToken from 'jsonwebtoken';
import { expect } from 'chai';
import moxios from 'moxios';
import userSignupRequest from '../../src/actions/SignUpAction';
import * as types from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const user = {
  firstname: 'Annmary',
  lastname: 'Agunanna',
  email: 'annmaryamaka@gmail.com',
  image: 'cloudImageUrl'
};

describe('Sign Up Action Test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const token = jwtToken.sign(user, 'iwillnotlosecton');
  it('creates SET_CURRENT_USER after successfuly signed up a user', (done) => {
    moxios.stubRequest('/api/v1/auth/signup', {
      status: 200,
      response: {
        token
      }
    });

    const expectedAction = [
      {
        type: types.SET_CURRENT_USER,
        payload: { ...user, iat: Math.floor(Date.now() / 1000) },
      }
    ];
    const store = mockStore({});

    return store.dispatch(userSignupRequest(user))
      .then(() => {
        expect(store.getActions()).to.eql(expectedAction);
        done();
      });
  });

  it('creates SIGNUP_FAILED after it failed to signup', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Failed to Register'
        }
      });
    });

    const expectedAction = [
      {
        type: types.SIGNUP_FAILED,
        error: {
          message: 'Failed to Register',
        }
      }
    ];
    const store = mockStore({});
    return store.dispatch(userSignupRequest(user))
      .then(() => {
        expect(store.getActions()).to.eql(expectedAction);
        done();
      });
  });
});
