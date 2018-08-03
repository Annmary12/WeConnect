import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import Card from '../../../src/components/pages/Card';
import { business } from '../../mock/data';

configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    name: 'name',
    description: 'description',
    id: 2,
    image: 'image',
    totalLikes: 4,
    averageRating: 3,
  };
  return shallow(<Card { ...props } />);
};

describe('Component: Card', () => {
  it('it should render business card', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('span').length).toBe(3);
    expect(wrapper.find('Link').length).toBe(1);
  });
});
