import axios from 'axios';
import { IS_REQUESTING, CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from './types';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';

// /**
//  *
//  * @param {object} response
//  * @returns {object} response
//  */
// export function createBusinessResponse() {
//   return {
//     type: CREATE_BUSINESS_SUCCESSFUL,
//   };
// }

// /**
//  *
//  * @param {object} error
//  * @returns {object} error
//  */
// export function createBusinessError(error) {
//   return {
//     type: CREATE_BUSINESS_FAILED,
//     error
//   };
// }

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
      .then(({ data }) => {
        dispatch(actionResponseSuccess(CREATE_BUSINESS_SUCCESSFUL, data.message));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
      // .catch((error) => {
      //   const errorMessage = error.response.data[0] || error.response.data.message;
      //   // console.log(errorMessage);
      //   dispatch(actionResponseFailure(CREATE_BUSINESS_FAILED, errorMessage));
      //   dispatch(isRequesting(IS_REQUESTING, false));
      //   Materialize.toast(errorMessage, 4000, 'red accent-3 rounded');
      // });
  }
);

const createBusinessRequest = business => (
  (dispatch) => {
    dispatch(isRequesting(IS_REQUESTING, true));
    let cloudImageUrl = process.env.DEFAULT_IMAGE;

    if (!business.image.name) {
      return dispatch(createBusiness(business, cloudImageUrl));
    }


    const imageData = new FormData();
    imageData.append('file', business.image);
    imageData.append('upload_preset', process.env.CLOUDINARY_PRESET);
    delete axios.defaults.headers.common.Authorization;
    return axios.post(process.env.CLOUDINARY_URL, imageData)
      .then(({ data }) => {
        // const token = localStorage.getItem('jwtToken');
        axios.defaults.headers.common.Authorization = localStorage.jwtToken;
        cloudImageUrl = data.secure_url;
        dispatch(createBusiness(business, cloudImageUrl));
        dispatch(isRequesting(IS_REQUESTING, false));
      })
      .catch(() => {
        dispatch(actionResponseFailure(CREATE_BUSINESS_FAILED, ' Failed to upload image. try again!!! '));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
  });

export default createBusinessRequest;
