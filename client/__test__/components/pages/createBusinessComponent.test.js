import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectedCreateBusiness, { CreateBusiness } from '../../../src/components/pages/CreateBusiness';
import { business } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

let props;
let context;
const setup = () => {
  props = {
    isLoading: true,
    createBusinessResponse: {
      isCreated: false,
      hasError: false,
      error: 'error'
    },
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    handleImageChange: jest.fn(),
    createBusinessRequest: jest.fn(() => Promise.resolve()),
  };
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  return shallow(<CreateBusiness { ...props } />, { context });
};

let wrapper = setup();
const action = wrapper.instance();
describe('Component: CreateBusiness', () => {
  it('it should render create business', () => {
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('h3').length).toBe(1);
  });

  it('it should set business value when it changes', () => {
    const event = {
      target: {
        name: 'name',
        value: 'weconnect'
      },
      preventDefault: jest.fn(),
    };
    action.onChange(event);
    expect(action.state.name).toBe('weconnect');
  });

  it('it should submit business form', () => {
    const createBusiness = jest.spyOn(wrapper.instance(), 'onSubmit');
    action.onSubmit({ preventDefault: () => 1 });
    expect(createBusiness).toBeCalled();
  });

  it('it should change image value when it changes', () => {
    const event = {
      target: {
        files: [{
          name: 'afroPic1.jpg',
          lastModified: 1531407463053,
          lastModifiedDate: 'Thu Jul 12 2018 15:57:43',
          webkitRelativePath: '',
          size: 344818,
          type: 'image/jpeg',
        }],
        preventDefault: jest.fn()
      }
    };
    const handleImage = jest.spyOn(action, 'handleImageChange');
    action.handleImageChange(event);
    expect(handleImage).toBeCalled();
  });
});

describe('Connected: CreateBusiness', () => {
  it('it should render create business component successsfully', () => {
    const store = mockStore({
      createBusiness: {
        isCreated: false,
        hasError: false,
        error: 'error',
        isLoading: true
      },
    });
    wrapper = shallow(<ConnectedCreateBusiness store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
