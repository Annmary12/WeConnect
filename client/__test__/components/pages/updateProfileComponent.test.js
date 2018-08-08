import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectedUpdateProfile, { UpdateProfile } from '../../../src/components/pages/UpdateProfile';
import { user, business } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

let props;
let context;

const setup = () => {
  props = {
    onChange: jest.fn(),
    onUpdate: jest.fn(),
    handleImageChange: jest.fn(),
    getUserRequest: jest.fn(() => Promise.resolve()),
    updateUserRequest: jest.fn(() => Promise.resolve()),
    userId: user.id,
    currentUser: user,
    message: 'message',
    isLoading: false
  };
  context = {
    router: {
      history: { push: jest.fn() }
    }
  };
  return shallow(<UpdateProfile { ...props } />, { context });
};

let wrapper = setup();
const action = wrapper.instance();
describe('Component: UpdateProfile', () => {
  it('should render the update profile page', () => {
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('Footer').length).toBe(1);
  });
  it('should fetch a user', () => {
    const getUser = jest.spyOn(action, 'componentDidMount');
    action.componentDidMount();
    expect(getUser).toBeCalled();
  });

  it('should receive the next props', () => {
    const receiceProps = jest.spyOn(action, 'componentWillReceiveProps');
    action.componentWillReceiveProps(props);
    expect(receiceProps).toBeCalled();
  });

  it('should set user value when it changes', () => {
    const event = {
      target: {
        name: 'firstname',
        value: 'Annmary'
      }
    };
    action.onChange(event);
    expect(action.state.firstname).toBe('Annmary');
  });

  it('should update a profile', () => {
    const update = jest.spyOn(action, 'onUpdate');
    action.onUpdate({ preventDefault: () => 1 });
    expect(update).toBeCalled();
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

describe('Connected: UpdateProfile', () => {
  it('should render update profile', () => {
    const store = mockStore({
      auth: {
        user: {
          id: user.id
        }
      },
      getUser: {
        user,
        message: 'message',
        isLoading: false
      },
    });
    wrapper = shallow(<ConnectedUpdateProfile store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
