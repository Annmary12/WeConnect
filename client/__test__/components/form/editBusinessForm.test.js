import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import EditBusinessConnect, { EditBusinessForm } from '../../../src/components/pages/forms/EditBusinessForm';
import { business } from '../../mock/data';
import imageFileChecker from '../../../src/utils/imageChecker';
import image from '../../../public/images/bu.jpg';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });


let props;
let context;
const setup = () => {
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  props = {
    onChange: jest.fn(),
    onUpdate: jest.fn(),
    handleImageChange: jest.fn(),
    updateBusinessRequest: jest.fn(() => Promise.resolve()),
    business: {
      id: 1,
      name: 'name',
      description: 'description'
    }
  };
  return shallow(<EditBusinessForm { ...props } />, { context });
};

const setup2 = () => {
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  props = {
    onChange: jest.fn(),
    onUpdate: jest.fn(),
    handleImageChange: jest.fn(),
    updateBusinessRequest: jest.fn(() => Promise.resolve()),
  };
  return shallow(<EditBusinessForm { ...props } />, { context });
};

let wrapper = setup();
const action = wrapper.instance();
describe('Component: EditBusiness', () => {
  it('should render the edit business form', () => {
    expect(wrapper.find('div').length).toBe(14);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(5);
    expect(wrapper.find('label').length).toBe(5);
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('Row').length).toBe(2);
    expect(wrapper.find('Input').length).toBe(2);
    expect(wrapper.find('i').length).toBe(6);
  });

  it('should render the edit business form', () => {
    const wrapper2 = setup2();
    const action2 = wrapper2.instance();

    expect(wrapper2.find('p').length).toBe(1);
  });

  it('should set business value when it changes', () => {
    const event = {
      target: {
        name: 'name',
        value: 'business name'
      },
      preventDefault: jest.fn(),
    };
    action.onChange(event);
    expect(action.state.name).toBe('business name');
  });

  it('should update a business', () => {
    const updateBusiness = jest.spyOn(wrapper.instance(), 'onUpdate');
    action.onUpdate({ preventDefault: () => 1 });
    expect(updateBusiness).toBeCalled();
  });

  it('should change image value when it changes', () => {
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

describe('Connect EditBusinessForm', () => {
  it('should render the component successfully', () => {
    const store = mockStore({
      OneBusiness: {
        business
      }
    });
    wrapper = shallow(<EditBusinessConnect store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
