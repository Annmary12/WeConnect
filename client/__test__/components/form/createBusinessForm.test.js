import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateBusinessForm from '../../../src/components/pages/forms/CreateBusinessForm';

configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    handleImageChange: jest.fn(),
    isLoading: true,
    name: 'Annmary',
    description: 'description',
    address: 'address',
    phoneNumber: 908258920,
    location: 'lagos',
    category: 'IT',
    website: 'www.website.com',
    imageSrc: 'image'
  };
  return shallow(<CreateBusinessForm { ...props } />);
};

describe('Component: createBusinessForm', () => {
  it('should render the create business form component', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('div').length).toBe(17);
    expect(wrapper.find('i').length).toBe(8);
    expect(wrapper.find('button').length).toBe(1);
  });
});
