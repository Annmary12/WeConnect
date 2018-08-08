import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import UpdateProfile from '../../../src/components/pages/forms/UpdateProfile';

configure({ adapter: new Adapter() });
let props;

const setup = () => {
  props = {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    currentImageSrc: 'image',
    isLoading: false,
    onChange: jest.fn(),
    onUpdate: jest.fn(),
    handleImageChange: jest.fn()
  };
  return shallow(<UpdateProfile { ...props } />);
};

describe('Component: UpdateProfile', () => {
  it('should render update profile component', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(7);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('button').length).toBe(2);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('InputFieldGroup').length).toBe(3);
    expect(wrapper.find('span').length).toBe(1);
  });
});
