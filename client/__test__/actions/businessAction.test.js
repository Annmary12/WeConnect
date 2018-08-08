import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import moxios from 'moxios';
import { fetchBusinessesRequest, searchBusinessesRequest, fetchOneBusinessRequest, updateBusinessRequest, deleteBusinessRequest, likeRequest } from '../../src/actions/business';
import * as types from '../../src/actions/types';
import { business, user, updatebusiness } from '../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const page = 1;

describe('Business Action Test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('fetch all businessses', () => {
    it('creates FETCH_BUSINESS_SUCCESSFUL after successful fetch of all businesses', (done) => {
      moxios.stubRequest('/api/v1/businesses?page=1', {
        status: 200,
        response: {
          message: 'List of all businesses',
          numberOfBusinesses: 9,
          limit: 6,
          totalPages: 2,
          currentPage: 1,
          allBusinesses: [{ ...business }]
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
          allBusinesses: [{ ...business }]
        }
      }];

      const store = mockStore({});

      return store.dispatch(fetchBusinessesRequest(1))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates FETCH_BUSINESS_FAILED after failure to get all businesses', (done) => {
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

  describe('search for business', () => {
    const searchType = 'name';
    const value = business.name;
    it('creates FETCH_BUSINESS_SUCCESSFUL after a successful business search', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'List of all businesses',
            numberOfBusinesses: 9,
            limit: 6,
            totalPages: 2,
            currentPage: 1,
            allBusinesses: [{ ...business }]
          }
        });
      });

      const expectedAction = [{
        type: types.FETCH_BUSINESS_SUCCESSFUL,
        payload: {
          message: 'List of all businesses',
          numberOfBusinesses: 9,
          limit: 6,
          totalPages: 2,
          currentPage: 1,
          allBusinesses: [{ ...business }]
        }
      }];

      const store = mockStore({});

      return store.dispatch(searchBusinessesRequest(searchType, value))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
    it('creates FETCH_BUSINESS_FAILED after failure to fetch a searched business', (done) => {
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

      return store.dispatch(searchBusinessesRequest(searchType, value))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });

  describe('fetch one business', () => {
    it('creates FETCH_ONE_BUSINESS_SUCCESSFUL after a successful business fetch', (done) => {
      moxios.stubRequest('/api/v1/businesses/2', {
        status: 200,
        response: {
          businesses: business,
          error: false
        }
      });

      const expectedAction = [
        {
          type: types.FETCH_ONE_BUSINESS_SUCCESSFUL,
          payload: business
        }
      ];
      const store = mockStore({});
      return store.dispatch(fetchOneBusinessRequest(2))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates FETCH_BUSINESS_FAILED after failure to get a business', (done) => {
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
    it('creates UPDATE_BUSINESS_SUCCESSFUL after a successful business update', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            business
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
          payload: business
        },
      ];

      const store = mockStore({});
      return store.dispatch(updateBusinessRequest(business))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates UPDATE_BUSINESS_FAILED after failure to updated a business', (done) => {
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
      return store.dispatch(updateBusinessRequest(business))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
    it('creates SAVE_IMAGE_FAILED after failure to upload an image', (done) => {
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
          type: types.SAVE_IMAGE_FAILED,
          error: 'Failed to upload image. Try again'
        },
        {
          type: types.IS_REQUESTING,
          bool: false
        },
      ];
      const store = mockStore({});

      return store.dispatch(updateBusinessRequest(updatebusiness))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });

  describe('Delete business', () => {
    it('creates DELETE_BUSINESS_SUCCESSFUL after deleting a business', (done) => {
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
    it('creates DELETE_BUSINESS_FAILED after failure to delete a business', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            message: 'Failed to delete a business'
          }
        });
      });
      const expectedAction = [
        {
          type: types.DELETE_BUSINESS_FAILED,
          error: 'Failed to delete a business'
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
    it('creates LIKE_SUCCESSFUL after a successful business like action', (done) => {
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

    it('creates LIKE_FAILED after it failure to like a business', (done) => {
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
