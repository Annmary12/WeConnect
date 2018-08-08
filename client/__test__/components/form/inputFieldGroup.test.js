import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputFieldGroup from '../../../src/components/pages/forms/InputFieldGroup';

configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    type: 'type',
    onChange: jest.fn(),
    value: 'value',
    name: 'name',
    label: 'label',
    icon: 'icon'
  };
  return shallow(<InputFieldGroup { ...props } />);
};

describe('Component: InputFieldGroup', () => {
  it('should render the input field', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('i').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('label').length).toBe(1);
  });
});
