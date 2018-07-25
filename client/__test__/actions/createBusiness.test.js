import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import moxios from 'moxios';
import createBusinessRequest from '../../src/actions/createBusiness';
import * as types from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const business = {
  name: 'name',
  description: 'description',
  phoneNumber: 'phoneNumber',
  address: 'address',
  image: 'cloudImageUrl',
  location: 'location',
  category: 'category',
  website: 'website'
};

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

  it('creates CREATE_BUSINESS_FAILED after successfuly failed to create a business', (done) => {
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
});
