import {
  IS_REQUESTING,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  USER_BUSINESSES_SUCCESS,
  USER_BUSINESSES_FAILURE
} from './types';
import axios from 'axios';
import { isRequesting, actionResponseSuccess, actionResponseFailure } from './helper';

// export const getUserSuccessful = user {
//     return {
//         type: GET_USER_SUCCESSFUL,
//         user
//     }
// };

// actionResponseSuccess(GET_USER_SUCCESSFUL, user)

// export function getUserFailed(error) {
//     return {
//         type: GET_USER_FAILURE,
//         error
//     }
// };
export const getUserRequest = id => dispatch =>
  axios.get(`api/v1/auth/user/${id}`)
    .then((response) => {
      dispatch(actionResponseSuccess(GET_USER_SUCCESS, response.data.getUser));
    })
    .catch(() => {
      dispatch(actionResponseFailure(GET_USER_FAILURE, 'User not found'));
    });

// const userBusinessesSuccess = businesses => ({
//   type: USER_BUSINESSES_SUCCESS,
//   businesses
// });


export const getUserBusinessesRequest = id => (
  (dispatch) => {
    dispatch(isRequesting(IS_REQUESTING, true));
    return axios.get(`api/v1/auth/user/${id}/business`)
      .then((response) => {
        dispatch(actionResponseSuccess(USER_BUSINESSES_SUCCESS, response.data.businesses));
        dispatch(isRequesting(IS_REQUESTING, false));
      })
      .catch((error) => {
        dispatch(actionResponseFailure(USER_BUSINESSES_FAILURE, error.response.data.message));
        dispatch(isRequesting(IS_REQUESTING, false));
      });
  });
