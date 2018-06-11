import axios from 'axios';
import { IS_REQUESTING, CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from './types';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';

/**
 *
 * @param {object} response
 * @returns {object} response
 */
export function createBusinessResponse() {
  return {
    type: CREATE_BUSINESS_SUCCESSFUL,
  };
}

/**
 *
 * @param {object} error
 * @returns {object} error
 */
export function createBusinessError(error) {
  return {
    type: CREATE_BUSINESS_FAILED,
    error
  };
}

/**
 * @description action to create a new business
 * @param {object} business
 * @param {object} cloudImageUrl
 * @returns {object} business
 */
const createBusiness = (business, cloudImageUrl) => (
  (dispatch) => {
    dispatch(isRequesting(IS_REQUESTING, true));
    return axios({
      method: 'POST',
      url: '/api/v1/businesses/',
      data: {
        name: business.name,
        description: business.description,
        phoneNumber: business.phoneNumber,
        address: business.address,
        image: cloudImageUrl,
        location: business.location,
        category: business.category,
        website: business.website
      }
    })
      .then(() => {
        dispatch(actionResponseSuccess(CREATE_BUSINESS_SUCCESSFUL, 'sucessfully saved'));
        dispatch(isRequesting(IS_REQUESTING, false));
      }).catch((error) => {
        // return console.log();
        const errorMessage = error.response.data[0] || error.response.data.message;
        dispatch(actionResponseFailure(CREATE_BUSINESS_FAILED, errorMessage));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
  }
);

export const createBusinessRequest = business => (
  (dispatch) => {
    dispatch(isRequesting(IS_REQUESTING, true));
    let cloudImageUrl = process.env.DEFAULT_IMAGE;
    if (!business.image.name) {
      return dispatch(createBusiness(business, cloudImageUrl));
    }

    const data = new FormData();
    data.append('file', business.image);
    data.append('upload_preset', process.env.CLOUDINARY_PRESET);
    delete axios.defaults.headers.common.Authorization;
    return axios.post(process.env.CLOUDINARY_URL, data)
      .then(({ data }) => {
        const token = localStorage.getItem('jwtToken');
        axios.defaults.headers.common.Authorization = token;
        cloudImageUrl = data.secure_url;
        dispatch(createBusiness(business, cloudImageUrl));
        dispatch(isRequesting(IS_REQUESTING, false));
      })
      .catch(() => {
        dispatch(createBusinessError(' Failed to upload image. try again!!! '));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
  });
