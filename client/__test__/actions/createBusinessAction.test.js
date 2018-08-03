import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import moxios from 'moxios';
import createBusinessRequest from '../../src/actions/createBusiness';
import * as types from '../../src/actions/types';
import { business2, business } from '../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('business Actiion', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('creates CREATE_BUSINESS_SUCCESSFUL after successfuly created a business', (done) => {
    moxios.stubRequest('/api/v1/businesses/', {
      status: 201,
      response: {
        business,
        message: 'Successfully Created',
        error: false
      }
    });

    const expectedAction = [
      {
        type: types.IS_REQUESTING,
        bool: true
      },
      {
        type: types.CREATE_BUSINESS_SUCCESSFUL,
        payload: 'Successfully Created'
      },
      {
        type: types.IS_REQUESTING,
        bool: false
      },
    ];
    const store = mockStore({});

    return store.dispatch(createBusinessRequest(business))
      .then(() => {
        expect(store.getActions()).to.eql(expectedAction);
        done();
      });
  });

  it('creates CREATE_BUSINESS_FAIL after successfuly failed to create a business', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Some error message'
        }
      });
    });

    const expectedAction = [
      {
        type: types.IS_REQUESTING,
        bool: true
      },
      {
        type: types.CREATE_BUSINESS_FAILED,
        error: 'Some error message'
      },
      {
        type: types.IS_REQUESTING,
        bool: false
      },
    ];
    const store = mockStore({});

    return store.dispatch(createBusinessRequest(business))
      .then(() => {
        expect(store.getActions()).to.eql(expectedAction);
        done();
      });
  });

  it('creates CREATE_BUSINESS_FAILED after successfuly failed to upload image', (done) => {
    moxios.stubRequest('https://api.cloudinary.com/v1_1/annmary/image/upload', {
      status: 400,
      response: {
        error: 'Failed to upload image. try again!!!'
      }
    });


    const expectedAction = [
      {
        type: types.IS_REQUESTING,
        bool: true
      },
      {
        type: types.CREATE_BUSINESS_FAILED,
        error: 'Failed to upload image. try again!!!'
      },
      {
        type: types.IS_REQUESTING,
        bool: false
      },
    ];
    const store = mockStore({});

    return store.dispatch(createBusinessRequest(business2))
      .then(() => {
        expect(store.getActions()).to.eql(expectedAction);
        done();
      });
  });
});
