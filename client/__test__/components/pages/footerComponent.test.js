import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../../src/components/pages/Footer';

configure({ adapter: new Adapter() });


const setup = () => shallow(<Footer />);

describe('Component: Footer', () => {
  it('it should render the footer page sucessfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('footer').length).toBe(1);
    expect(wrapper.find('a').length).toBe(1);
  });
});
