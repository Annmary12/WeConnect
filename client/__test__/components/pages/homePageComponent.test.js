import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../../../src/components/pages/HomePage';

configure({ adapter: new Adapter() });


const setup = () => shallow(<HomePage />);

describe('Component: HomePage', () => {
  it('it should render the home page sucessfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
