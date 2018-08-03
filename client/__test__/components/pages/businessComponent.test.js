import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectedBusiness, { Business } from '../../../src/components/pages/Business';
import { business } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

let props;

const setup = () => {
  props = {
    renderBusiness: jest.fn(),
    onPageChange: jest.fn(),
    fetchBusinessesRequest: jest.fn(() => Promise.resolve()),
  };
  return shallow(<Business { ...props } />);
};

let wrapper = setup();
let action = wrapper.instance();
describe('Component: Business', () => {
  it('it should render all business', () => {
    expect(wrapper.find('div').length).toBe(9);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('it should fetch all business', () => {
    const fetchBusiness = jest.spyOn(wrapper.instance(), 'componentDidMount');
    action.componentDidMount();
    expect(fetchBusiness).toBeCalled();
  });

  it('it should change the page', () => {
    const page = 1;
    const fetchBusinessByPageNumber = jest.spyOn(wrapper.instance(), 'onPageChange');
    action.onPageChange(page);
    expect(fetchBusinessByPageNumber).toBeCalled();
  });
});

describe('Connected Business', () => {
  it('it should render business component successfully', () => {
    const store = mockStore({
      BusinessReducer: {
        businesses: {
          allBusinesses: [{ ...business }]
        }
      }
    });
    wrapper = shallow(<ConnectedBusiness store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
