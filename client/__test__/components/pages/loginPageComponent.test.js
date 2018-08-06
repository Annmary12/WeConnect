import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectLogin, { Login } from '../../../src/components/pages/LoginPage';
import { business } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

let props;
let context;
const setup = () => {
  props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    userLoginRequest: jest.fn(() => Promise.resolve()),
    auth: {
      isAuthenticated: false
    }
  };
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  return shallow(<Login { ...props } />, { context });
};

const setup2 = () => {
  props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    userLoginRequest: jest.fn(() => Promise.resolve()),
    auth: {
      isAuthenticated: true
    }
  };
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  return shallow(<Login { ...props } />, { context });
};

let wrapper = setup();
const action = wrapper.instance();
describe('Component: LoginPage', () => {
  it('should render the login page', () => {
    expect(wrapper.find('div').length).toBe(3);
  });

  it('should not render login page', () => {
    wrapper = setup2();
    expect(wrapper.find('Redirect').length).toBe(1);
  });

  it('should set login value when it changes', () => {
    const event = {
      target: {
        name: 'email',
        value: 'anmmaryamaka@gmail.com'
      }
    };
    action.onChange(event);
    expect(action.state.email).toBe('anmmaryamaka@gmail.com');
  });

  it('should submit login form', () => {
    const userLogin = jest.spyOn(action, 'onSubmit');
    action.onSubmit({ preventDefault: () => 1 });
    expect(userLogin).toBeCalled();
  });
});

describe('Connected: Login', () => {
  it('should render login component successfully', () => {
    const store = mockStore({
      auth: {
        isAuthenticated: false
      }
    });
    wrapper = shallow(<ConnectLogin store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
