import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import moxios from 'moxios';
import * as types from '../../src/actions/types';
import { getUserRequest, getUserBusinessesRequest, updateUser, updateUserRequest, } from '../../src/actions/getUser';
import { business, user, userUpdate } from '../mock/data';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const id = 1;
const page = 1;

describe('User Actions Test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('fetch a user', () => {
    it('creates GET_USER_SUCCESS after successful fetch', (done) => {
      moxios.stubRequest(`api/v1/auth/user/${id}`, {
        status: 200,
        response: {
          getUser: user,
        }
      });

      const expectedAction = [
        {
          type: types.GET_USER_SUCCESS,
          payload: user
        },
      ];

      const store = mockStore({});
      return store.dispatch(getUserRequest(id))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates GET_USER_FAILURE after failure to get a user', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            error: 'User not found'
          }
        });
      });

      const expectedAction = [
        {
          type: types.GET_USER_FAILURE,
          error: 'User not found'
        },
      ];

      const store = mockStore({});
      return store.dispatch(getUserRequest(id))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });

  describe('get users business(es)', () => {
    it('creates USER_BUSINESSES_SUCCESS after successful fetch of a user\'s business(es)', (done) => {
      moxios.stubRequest(`/api/v1/auth/user/${id}/business?page=${page}`, {
        status: 200,
        response: {
          businesses: [{ ...business }],
          message: 'Business Found'
        }
      });

      const expectedAction = [
        {
          type: types.IS_REQUESTING,
          bool: true
        },
        {
          type: types.USER_BUSINESSES_SUCCESS,
          payload: {
            businesses: [{ ...business }],
            message: 'Business Found'
          }
        },
        {
          type: types.IS_REQUESTING,
          bool: false
        },
      ];

      const store = mockStore({});
      return store.dispatch(getUserBusinessesRequest(id, page))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates USER_BUSINESSES_FAILURE after failed fetch a user\'s business(es)', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            message: 'Business Not Found'
          }
        });
      });
      const expectedAction = [
        {
          type: types.IS_REQUESTING,
          bool: true
        },
        {
          type: types.USER_BUSINESSES_FAILURE,
          error: 'Business Not Found',
        },
        {
          type: types.IS_REQUESTING,
          bool: false
        },
      ];

      const store = mockStore({});
      return store.dispatch(getUserBusinessesRequest(id, page))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });

  describe('Update User', () => {
    it('creates USER_UPDATE_SUCCESSFUL after a successful user update', (done) => {
      moxios.stubRequest('/api/v1/auth/user', {
        status: 200,
        response: {
          message: 'Updated Successfully'
        }
      });

      const expectedAction = [
        {
          type: types.IS_REQUESTING,
          bool: true
        },
        {
          type: types.USER_UPDATE_SUCCESSFUL,
          payload: 'Updated Successfully'
        },
        {
          type: types.IS_REQUESTING,
          bool: false
        },
      ];

      const store = mockStore({});
      return store.dispatch(updateUserRequest(user))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates USER_BUSINESSES_FAILURE after failure to update a user', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            message: 'Failed to update'
          }
        });
      });
      const expectedAction = [
        {
          type: types.IS_REQUESTING,
          bool: true
        },
        {
          type: types.USER_UPDATE_FAILURE,
          error: 'Failed to update',
        },
        {
          type: types.IS_REQUESTING,
          bool: false
        },
      ];

      const store = mockStore({});
      return store.dispatch(updateUserRequest(user))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
    it('creates USER_UPDATE_FAILURE after failure to upload an image', (done) => {
      moxios.stubRequest('https://api.cloudinary.com/v1_1/annmary/image/upload', {
        status: 400,
        response: {
          error: 'Failed to upload image. Try again'
        }
      });


      const expectedAction = [
        {
          type: types.IS_REQUESTING,
          bool: true
        },
        {
          type: types.USER_UPDATE_FAILURE,
          error: 'Failed to upload image. Try again'
        },
        {
          type: types.IS_REQUESTING,
          bool: false
        },
      ];
      const store = mockStore({});

      return store.dispatch(updateUserRequest(userUpdate))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });
});

