import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ConnectedReviewForm, { ReviewForm } from '../../../src/components/pages/forms/ReviewForm';
// import { review } from '../../mock/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

const review = {
  context: 'context',
  rating: 1,
  reviewer: { image: 'image' },
  id: 'hgjhkj',
  createdAt: '01.04.2018'
};

let props;
const setup = () => {
  props = {
    onChange: jest.fn(),
    onSubmitReview: jest.fn(),
    changeRating: jest.fn(),
    reviewRequest: jest.fn(() => Promise.resolve()),
    getReviewRequest: jest.fn(() => Promise.resolve()),
    authData: {
      isAuthenticated: true,
    },
    reviews: [{ ...review }],
    review,
  };
  return shallow(<ReviewForm { ...props } />);
};

let wrapper = setup();
let action = wrapper.instance();
describe('Component: ReviewForm', () => {
  it('it should render review business form', () => {
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('label').length).toBe(1);
    expect(wrapper.find('StarRatings').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('it should set review value when it changes', () => {
    const event = {
      target: {
        name: 'context',
        value: 'context'
      },
      preventDefault: jest.fn(),
    };
    action.onChange(event);
    expect(action.state.context).toBe('context');
  });

  it('it shoukd submit a review form', () => {
    const submitReview = jest.spyOn(wrapper.instance(), 'onSubmitReview');
    action.onSubmitReview({ preventDefault: () => 1 });
    expect(submitReview).toBeCalled();
  });

  it('it should set the value of the rating when it is changed', () => {
    const newRating = 3;
    action.changeRating(newRating);
    expect(action.state.rating).toEqual(3);
  });
});

describe('Connected ReviewForm', () => {
  it('it should render the component successfully', () => {
    const store = mockStore({
      OneBusiness: {
        business: {
          id: 1
        }
      },
      ReviewReducer: {
        context: 'context',
        rating: 4
      },
      auth: {
        isAuthenticated: true
      }
    });

    wrapper = shallow(<ConnectedReviewForm store={ store } />);
    expect(wrapper.length).toBe(1);
  });
});
