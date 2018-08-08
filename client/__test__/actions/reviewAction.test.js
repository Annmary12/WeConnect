import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import moxios from 'moxios';
import * as types from '../../src/actions/types';
import { reviewRequest, getReviewRequest } from '../../src/actions/review';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const id = 1;
const review = {
  context: 'nice business',
  rating: 3
};

describe('Review Action test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('post review', () => {
    it('creates REVIEW_SUCCESSFUL after a successful business review', (done) => {
      moxios.stubRequest(`/api/v1/businesses/${id}/reviews`, {
        status: 200,
        response: {
          message: 'Saved Successful',
        }
      });

      const expectedAction = [
        {
          type: types.REVIEW_SUCCESSFUL,
          payload: 'Saved Successful'
        },
      ];

      const store = mockStore({});
      return store.dispatch(reviewRequest(review, id))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates REVIEW_FAILED', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            message: 'Business Not Reviewed'
          }
        });
      });
      const expectedAction = [
        {
          type: types.REVIEW_FAILED,
          error: 'Business Not Reviewed',
        },
      ];

      const store = mockStore({});
      return store.dispatch(reviewRequest(review, id))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });
  });
  describe('get review', () => {
    it('creates ALL_REVIEW after a successful fetch for all reviews', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            reviews: [{ ...review }]
          }
        });
      });
      const expectedAction = [
        {
          type: types.ALL_REVIEW,
          payload: {
            reviews: [{ ...review }],
          }
        },
      ];

      const store = mockStore({});
      return store.dispatch(getReviewRequest(id))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

    it('creates REVIEW_FAILED after failure to get review(s)', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            message: 'Review(s) not found'
          }
        });
      });
      const expectedAction = [
        {
          type: types.REVIEW_FAILED,
          error: 'Review(s) not found',
        },
      ];

      const store = mockStore({});
      return store.dispatch(getReviewRequest(id))
        .then(() => {
          expect(store.getActions()).to.eql(expectedAction);
          done();
        });
    });

  });
});
