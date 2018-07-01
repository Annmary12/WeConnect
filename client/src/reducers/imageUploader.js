import { SAVE_IMAGE_SUCCESSFUL, SAVE_IMAGE_FAILED } from '../actions/types';

const initialState = {
  imageData: {},
  error: false,
  hasSaved: false
};

/**
 * @description holds success and failure states for uploading images.
 * @function
 *
 * @param { object } state - contains reducer initial state
 * @param { object } action - contains actions to be performed
 *
 * @returns { object } the new image state
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_IMAGE_SUCCESSFUL:
      return {
        ...state,
        imageData: action.image,
        hasSaved: true
      };
    case SAVE_IMAGE_FAILED:
      return {
        ...state,
        error: action.error,
      };

    default: return state;
  }
};
