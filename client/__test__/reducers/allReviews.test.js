import reviewReducer from '../../src/reducers/review';
import { ALL_REVIEW } from '../../src/actions/types';

describe('Review Reducer', () => {
  const initialState = {
    reviews: {},
    totalReview: 0,
  };
  it('should handle ALL_REVIEW', () => {
    const payload = {
      reviews: [
        {
          id: 2,
          context: 'nice business',
          userId: 4,
          businessId: 5,
          rating: null,
          reviewer: {
            firstname: 'Sandra',
            lastname: 'Agbala',
            image: 'https://res.cloudinary.com/annmary/image/upload/v1530638224/n2inrs1sfydcbwdmv9un.jpg'
          }
        },
        {
          id: 3,
          context: 'nice',
          userId: 4,
          businessId: 5,
          rating: null,
          reviewer: {
            firstname: 'Sandra',
            lastname: 'Agbala',
            image: 'https://res.cloudinary.com/annmary/image/upload/v1530638224/n2inrs1sfydcbwdmv9un.jpg'
          }
        },
      ],
      totalReview: 2
    };
    const action = {
      type: ALL_REVIEW,
      payload
    };

    const newState = reviewReducer(initialState, action);
    expect(newState.reviews[0].id).toEqual(2);
    expect(newState.reviews[0].businessId).toEqual(5);
    expect(newState.reviews[0].reviewer.firstname).toEqual('Sandra');
    expect(newState.reviews[1].id).toEqual(3);
    expect(newState.reviews[1].userId).toEqual(4);
    expect(newState.reviews[1].reviewer.lastname).toEqual('Agbala');
  });
  it('should handle initial state', () => {
    const newState = reviewReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
