import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectedBusinessProfile, { BusinessProfile } from '../../../src/components/pages/BusinessProfile';
import { business, user, review } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });


let props;
let context;
const setup = () => {
  props = {
    oneBusiness: [business],
    business,
    onDelete: jest.fn(),
    handleLike: jest.fn(),
    fetchOneBusinessRequest: jest.fn(() => Promise.resolve()),
    deleteBusinessRequest: jest.fn(() => Promise.resolve()),
    getReviewRequest: jest.fn(() => Promise.resolve()),
    likeRequest: jest.fn(() => Promise.resolve()),
    match: {
      params: 4
    },
    authData: {
      user,
    }
  };
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  return shallow(<BusinessProfile { ...props } />, { context });
};
let wrapper = setup();
let action = wrapper.instance();
describe('Component: BusinessProfile', () => {
  it('should render business profile', () => {
    expect(wrapper.find('div').length).toBe(6);
  });

  it('should fetch one business and get review(s) for the business', () => {
    const fetchOneBusiness = jest.spyOn(wrapper.instance(), 'componentWillMount');
    action.componentWillMount();
    expect(fetchOneBusiness).toBeCalled();
  });

  it('should receive next props', () => {
    const nextProps = {
      business
    };
    const willReceiveProps = jest.spyOn(wrapper.instance(), 'componentWillReceiveProps');
    action.componentWillReceiveProps(nextProps);
    expect(action.state.oneBusiness).toBe(business);
    expect(willReceiveProps).toBeCalled();
  });

  it('should delete a business', () => {
    const deleteBusiness = jest.spyOn(wrapper.instance(), 'onDelete');
    action.onDelete();
    expect(deleteBusiness).toBeCalled();
  });

  it('should handle business like', () => {
    const likeBusiness = jest.spyOn(wrapper.instance(), 'handleLike');
    action.handleLike();
    expect(likeBusiness).toBeCalled();
  });
});

describe('Connected: BusinessProfile', () => {
  it('should render business profile', () => {
    const store = mockStore({
      OneBusiness: {
        business,
        isDeleted: true
      },
      auth: {
        user
      },
      ReviewReducer: [{ ...review }]
    });
    wrapper = shallow(<ConnectedBusinessProfile store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
