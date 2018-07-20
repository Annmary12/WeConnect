import reviewReducer from '../../src/reducers/review';
import {
  REVIEW_SUCCESSFUL,
  REVIEW_FAILED
} from '../../src/actions/types';

describe('review reducer', () => {
  const initialState = {
    message: '',
    error: '',
    isCreated: false,
    hasError: false,
  };
  it('should handle REVIEW_SUCCESSFUL', () => {
    const payload = 'Successfully reviewed';
    const isCreated = true;
    const action = {
      type: REVIEW_SUCCESSFUL,
      payload
    };

    const newState = reviewReducer(initialState, action);
    expect(newState.message).toEqual(payload);
    expect(newState.isCreated).toEqual(isCreated);
  });

  it('should handle REVIEW_FAILED', () => {
    const error = 'Not Successfully reviewed';
    const hasError = true;
    const action = {
      type: REVIEW_FAILED,
      error
    };

    const newState = reviewReducer(initialState, action);
    expect(newState.error).toEqual(error);
    expect(newState.hasError).toEqual(hasError);
  });

  it('should handle initial state', () => {
    const newState = reviewReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
