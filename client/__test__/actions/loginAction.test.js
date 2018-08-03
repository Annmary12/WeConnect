import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import jwtToken from 'jsonwebtoken';
import { expect } from 'chai';
import moxios from 'moxios';
import { userLoginRequest, logout } from '../../src/actions/login';
import * as types from '../../src/actions/types';
import { user } from '../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login Action Test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const token = jwtToken.sign(user, 'iwillnotlosecton');

  it('creates SET_CURRENT_USER after successfuly logged in a user', (done) => {
    moxios.stubRequest('/api/v1/auth/login', {
      status: 200,
      response: {
        token
      }
    });

    const expectedAction = [
      {
        type: types.SET_CURRENT_USER,
        user: { ...user, iat: Math.floor(Date.now() / 1000) },
      }
    ];
    const store = mockStore({});

    return store.dispatch(userLoginRequest(user))
      .then(() => {
        expect(store.getActions()).to.eql(expectedAction);
        done();
      });
  });

  it('creates LOGIN_FAILED after it failed to login', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Failed to Login'
        }
      });
    });

    const expectedAction = [
      {
        type: types.LOGIN_FAILED,
        error: 'Failed to Login',
      }
    ];
    const store = mockStore({});
    return store.dispatch(userLoginRequest(user))
      .then(() => {
        expect(store.getActions()).to.eql(expectedAction);
        done();
      });
  });

  it('it should logout a user', (done) => {
    const expectedAction = [
      {
        type: types.SET_CURRENT_USER,
        user: {},
      }
    ];
    const store = mockStore({});
    store.dispatch(logout());
    expect(store.getActions()).to.eql(expectedAction);
    done();
  });
});
