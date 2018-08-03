import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUpForm from '../../../src/components/pages/forms/SignUpForm';

configure({ adapter: new Adapter() });
let props;

const setup = () => {
  props = {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    confirmPassword: 'confirmPassword',
    isLoading: false,
    onSubmit: jest.fn(),
    onChange: jest.fn()
  };
  return shallow(<SignUpForm { ...props } />);
};

describe('Component: SignUpForm', () => {
  it('it should render signup component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('br').length).toBe(4);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('InputFieldGroup').length).toBe(5);
  });
});

