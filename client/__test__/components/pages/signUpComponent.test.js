import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectedSignUp, { SignUp } from '../../../src/components/pages/SignUp';
import { user, business } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

let props;
let context;
const setup = () => {
  props = {
    userSignupRequest: jest.fn(() => Promise.resolve()),
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    signUpData: {
      isAuthenticated: false,
    }
  };
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  return shallow(<SignUp { ...props } />, { context });
};

const setup2 = () => {
  props = {
    userSignupRequest: jest.fn(() => Promise.resolve()),
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    signUpData: {
      isAuthenticated: true
    }
  };
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  return shallow(<SignUp { ...props } />, { context });
};

let wrapper = setup();
const action = wrapper.instance();

describe('Component: SignUp', () => {
  it('should render signup page', () => {
    expect(wrapper.find('div').length).toBe(3);
  });

  it('should not render the signup page', () => {
    wrapper = setup2();
    expect(wrapper.find('Redirect').length).toBe(1);
  });

  it('should receive props', () => {
    const componentWillRecieveProps = jest.spyOn(action, 'componentWillReceiveProps');
    action.componentWillReceiveProps(props);
    expect(componentWillRecieveProps).toBeCalled();
  });

  it('should set the value of signup when changed', () => {
    const event = {
      target: {
        name: 'email',
        value: 'annmaryamaka@gmail.com',
      }
    };
    action.onChange(event);
    expect(action.state.email).toBe('annmaryamaka@gmail.com');
  });

  it('should submit signup form', () => {
    const signUp = jest.spyOn(action, 'onSubmit');
    action.onSubmit({ preventDefault: () => 1 });
    expect(signUp).toBeCalled();
  });
});

describe('Connected: SignUp', () => {
  it('should render signup component', () => {
    const store = mockStore({
      auth: {
        isAuthenticated: false,
        user: {
          id: 1
        }
      }
    });
    wrapper = shallow(<ConnectedSignUp store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
