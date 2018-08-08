import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectedSearch, { Search } from '../../../src/components/pages/Search';
import { user, business } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    onChange: jest.fn(),
    onSearch: jest.fn(),
    searchBusinessesRequest: jest.fn(() => Promise.resolve()),
  };
  return shallow(<Search { ...props } />);
};

let wrapper = setup();
const action = wrapper.instance();
describe('Component: Search', () => {
  it('should render search page', () => {
    expect(wrapper.find('div').length).toBe(10);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('option').length).toBe(4);
  });

  it('shoud set search type when changed', () => {
    const event = {
      target: {
        name: 'searchType',
        value: 'location'
      },
      preventDefault: jest.fn(),
    };
    action.onChange(event);
    expect(action.state.searchType).toBe('location');
  });

  it('should perform search', () => {
    const searchBusiness = jest.spyOn(action, 'onSearch');
    action.onSearch({ preventDefault: () => 1 });
    expect(searchBusiness).toBeCalled();
  });
});

describe('Connected: Search', () => {
  it('should render search component', () => {
    const store = mockStore({});
    wrapper = shallow(<ConnectedSearch store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
