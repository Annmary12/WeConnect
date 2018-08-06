import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewList from '../../../src/components/pages/ReviewList';

configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    context: 'context',
    createdAt: 'createdAt',
    user: {
      firstname: 'firstname',
      lastname: 'lastname'
    },
    image: 'image',
    rating: 4
  };
  return shallow(<ReviewList { ...props } />);
};

describe('Component: ReviewList', () => {
  it('should render review(es) successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('StarRatings').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('em').length).toBe(2);
  });
});
