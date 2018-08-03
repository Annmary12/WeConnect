import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BusinessDetails from '../../../src/components/pages/BusinessDetails';
import { business, review } from '../../mock/data';

configure({ adapter: new Adapter() });


let props;
const setup = () => {
  props = {
    location: 'location',
    category: 'category',
    name: 'name',
    website: 'website',
    description: 'description',
    id: 1,
    onDelete: jest.fn(),
    reviews: [{ ...review }],
    userId: 1,
    handleLike: jest.fn(),
    numberOfLikes: 3,
    totalReview: 3,
    averageRating: 3,
    authData: {
      isAuthenticated: true,
      user: {
        firstname: 'annmary',
        email: 'email'
      }
    },
  };
  return shallow(<BusinessDetails { ...props } />);
};


describe('Component: BusinessDetails', () => {
  it('it should render the business details successfully', () => {
    const wrapper = setup();
    console.log('@wrapper', wrapper);
    expect(wrapper.find('div').length).toBe(38);
  });
});
