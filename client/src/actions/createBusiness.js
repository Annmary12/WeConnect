import axios from 'axios';
import { IS_REQUESTING, CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED } from './types';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';

/**
 * @description handles create business
 * @param {object} business - contains business details
 * @param {object} cloudImageUrl - contains the url of the image
 * @returns {object} business action
 */
const createBusiness = (business, cloudImageUrl) => (
  dispatch =>
    axios({
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
      }).catch((error) => {
        dispatch(actionResponseFailure(CREATE_BUSINESS_FAILED, error.response.data.message));
        dispatch(isRequesting(IS_REQUESTING, false));
      })

);

/**
 * @description handles image save to cloudinary
 * @param { object } business - contains busness details
 *
 * @returns { object } returns the saved image
 */
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
        axios.defaults.headers.common.Authorization = localStorage.jwtToken;
        cloudImageUrl = data.secure_url;
        dispatch(createBusiness(business, cloudImageUrl));
        dispatch(isRequesting(IS_REQUESTING, false));
      })
      .catch(() => {
        dispatch(actionResponseFailure(CREATE_BUSINESS_FAILED, 'Failed to upload image. try again!!!'));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
  });

export default createBusinessRequest;
