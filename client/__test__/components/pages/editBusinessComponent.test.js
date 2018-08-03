import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectEditBusiness, { EditBusiness } from '../../../src/components/pages/EditBusiness';
import { business } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

let props;
let context;
const setup = () => {
  props = {
    fetchOneBusinessRequest: jest.fn(() => Promise.resolve()),
    match: {
      params: 1
    },
    business,
  };
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  return shallow(<EditBusiness { ...props } />, { context });
};

let wrapper = setup();
let action = wrapper.instance();
describe('Component: EditBusiness', () => {
  it('it should render edit business form', () => {
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('h3').length).toBe(1);
  });

  it('it should fetch a businness', () => {
    const fetchOneBusiness = jest.spyOn(wrapper.instance(), 'componentWillMount');
    action.componentWillMount();
    expect(fetchOneBusiness).toBeCalled();
  });
});

describe('Connected: EditBusiness', () => {
  it('it should render edit business successfully', () => {
    const store = mockStore({
      OneBusiness: {
        business
      }
    });
    wrapper = shallow(<ConnectEditBusiness store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
