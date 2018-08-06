import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import UserCard from '../../../src/components/pages/UserCard';

configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    name: 'name',
    description: 'description',
    id: 2,
    image: 'image',
  };
  return shallow(<UserCard { ...props } />);
};

describe('Component: UserCard', () => {
  it('should render the user card successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('span').length).toBe(2);
    expect(wrapper.find('Link').length).toBe(2);
    expect(wrapper.find('TextTruncate').length).toBe(2);
  });
});
