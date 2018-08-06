import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectedNavigation, { Navigation } from '../../../src/components/pages/Navigation';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

let props;
let context;

const setup = () => {
  props = {
    logout: jest.fn(),
    auth: {
      isAuthenticated: false,
    }
  };
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  return shallow(<Navigation { ...props } />, { context });
};

let wrapper = setup();
const action = wrapper.instance();
describe('Component: Navigation', () => {
  it('should render navigation page', () => {
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('Link').length).toBe(5);
  });

  it('should logout a user', () => {
    const logout = jest.spyOn(action, 'logout');
    action.logout({ preventDefault: () => 1 });
    expect(logout).toBeCalled();
  });
});

describe('Connected: Navigation', () => {
  it('should render the navigation component successfully', () => {
    const store = mockStore({
      auth: {
        isAuthenticated: true,
      }
    });
    wrapper = shallow(<ConnectedNavigation store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
