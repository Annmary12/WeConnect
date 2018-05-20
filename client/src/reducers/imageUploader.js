import { SAVE_IMAGE_SUCCESSFUL, SAVE_IMAGE_FAILED, SAVE_IMAGE_REQUEST } from '../actions/types';

const initialState = {
  imageData: {},
  error: false,
  hasSaved: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_IMAGE_SUCCESSFUL:
      return {
        imageData: action.image,
        error: '',
        hasSaved: true
      };
    case SAVE_IMAGE_FAILED:
      return {
        imageData: {},
        hasSaved: false,
        error: action.error,
      };

    default: return state;
  }
};
