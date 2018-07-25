import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import moxios from 'moxios';
import { fetchBusinessesRequest, fetchOneBusinessRequest, updateBusinessRequest, deleteBusinessRequest, likeRequest } from '../../src/actions/business';
import * as types from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const page = 1;
const payload = {
  name: 'name',
  description: 'description',
  phoneNumber: 'phoneNumber',
  address: 'address',
  image: 'cloudImageUrl',
  imageFile: 'cloudImageUrl',
  location: 'location',
  category: 'category',
  website: 'website'
};


describe('Business Action Test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('fetch all businessses', () => {
    it('creates FETCH_BUSINESS_SUCCESSFUL after successfuly fetched all businesses', (done) => {
      moxios.stubRequest('/api/v1/businesses?page=1', {
        status: 200,
        response: {
          message: 'List of all businesses',
          numberOfBusinesses: 9,
          limit: 6,
          totalPages: 2,
          currentPage: 1,
          allBusinesses: [{ ...payload }]
        }
      });

      const expectedAction = [{
        type: types.FETCH_BUSINESS_SUCCESSFUL,
        payload: {
          message: 'List of all businesses',
          numberOfBusinesses: 9,
          limit: 6,
          totalPages: 2,
          currentPage: 1,
          allBusinesses: [{ ...payload }]
        }
      }];

      const store = mockStore({});

      return store.dispatch(fetchBusinessesRequest(1))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates FETCH_BUSINESS_FAILED after failed to fetched all businesses', (done) => {
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
          type: types.FETCH_BUSINESS_FAILED,
          error: 'Business Not Found'
        },
      ];
      const store = mockStore({});

      return store.dispatch(fetchBusinessesRequest(1))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });

  describe('fetch one business', () => {
    it('creates FETCH_ONE_BUSINESS_SUCCESSFUL after successfully to fetched a businesses', (done) => {
      moxios.stubRequest('/api/v1/businesses/2', {
        status: 200,
        response: {
          businesses: payload,
          error: false
        }
      });

      const expectedAction = [
        {
          type: types.FETCH_ONE_BUSINESS_SUCCESSFUL,
          payload
        }
      ];
      const store = mockStore({});
      return store.dispatch(fetchOneBusinessRequest(2))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates FETCH_BUSINESS_FAILED after failed to fetched all businesses', (done) => {
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
          type: types.FETCH_BUSINESS_FAILED,
          error: 'Business Not Found'
        }
      ];

      const store = mockStore({});

      return store.dispatch(fetchOneBusinessRequest(2))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });

  describe('update a business', () => {
    it('creates UPDATE_BUSINESS_SUCCESSFUL after successfully updated a business', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            business: payload
          }
        });
      });

      const expectedAction = [
        {
          type: types.IS_REQUESTING,
          bool: true
        },
        {
          type: types.UPDATE_BUSINESS_SUCCESSFUL,
          payload
        },
      ];

      const store = mockStore({});
      return store.dispatch(updateBusinessRequest(payload))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates UPDATE_BUSINESS_FAILED after failed to updated a business', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            message: 'Failed to update',
          }
        });
      });

      const expectedAction = [
        {
          type: types.IS_REQUESTING,
          bool: true
        },
        {
          type: types.UPDATE_BUSINESS_FAILED,
          error: 'Failed to update',
        },
      ];

      const store = mockStore({});
      return store.dispatch(updateBusinessRequest(payload))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });

  describe('Delete business', () => {
    it('creates DELETE_BUSINESS_SUCCESSFUL after successfully deleted a business', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'Successfully deleted a business'
          }
        });
      });
      const expectedAction = [
        {
          type: types.DELETE_BUSINESS_SUCCESSFUL,
          payload: {
            message: 'Successfully deleted a business'
          },
        },
      ];
      const store = mockStore({});
      return store.dispatch(deleteBusinessRequest(1))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });

  describe('Like business', () => {
    it('creates LIKE_SUCCESSFUL after successfully liked a business', (done) => {
      moxios.stubRequest('/api/v1/auth/user/like', {
        status: 200,
        response: {
          message: 'Successfully liked a business'
        }
      });
      const expectedAction = [
        {
          type: types.LIKE_SUCCESSFUL,
          payload: 'Successfully liked a business',
        }
      ];
      const store = mockStore({});
      return store.dispatch(likeRequest(2, 3))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates LIKE_FAILED after it failed to like business', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          reponse: {
            message: 'Failed to Like'
          }
        });
      });
      const expectedAction = [
        {
          type: types.LIKE_FAILED,
          error: 'Failed to Like',
        }
      ];
      const store = mockStore({});
      return store.dispatch(likeRequest(2, 3))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });
});
