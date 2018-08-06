import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../../../src/components/pages/forms/LoginForm';

configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    email: 'email',
    password: 'password',
    onSubmit: jest.fn(),
    onChange: jest.fn()
  };
  return shallow(<LoginForm { ...props } />);
};

describe('Component: LoginForm', () => {
  it('should render login form component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });
});
