import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectedProfile, { Profile } from '../../../src/components/pages/Profile';
import { user, business } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    onPageChange: jest.fn(),
    getUserRequest: jest.fn(() => Promise.resolve()),
    getUserBusinessesRequest: jest.fn(() => Promise.resolve()),
    isLoading: false,
    userBusinesses: [{ ...business }],
    userId: user.id,
    currentUser: user,
  };
  return shallow(<Profile { ...props } />);
};

let wrapper = setup();
const action = wrapper.instance();
describe('Component: Profile', () => {
  it('it should render the profile page', () => {
    expect(wrapper.find('div').length).toBe(14);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('Link').length).toBe(1);
  });

  it('it should recieve current user and set it', () => {
    const componentWillReceiveProps = jest.spyOn(action, 'componentWillReceiveProps');
    action.componentWillReceiveProps(props);
    expect(componentWillReceiveProps).toBeCalled();  
  });

  it('it should change the page', () => {
    const page = 1;
    const userBusiness = jest.spyOn(action, 'onPageChange');
    action.onPageChange(page);
    expect(userBusiness).toBeCalled();
  });
});

describe('Connected: Profile', () => {
  it('it should render the profile component', () => {
    const store = mockStore({
      auth: {
        user: user.id
      },
      getUser: {
        user
      },
      userBusinesses: {
        businesses: [{ ...business }]
      },
      createBusiness: {
        isLoading: false
      }
    });
    wrapper = shallow(<ConnectedProfile store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
