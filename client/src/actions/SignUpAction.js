import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './login';
import { SIGNUP_FAILED } from './types';

// export function userSignupRequest(userData){
//     return dispatch => {
//         return axios.post('api/v1/auth/signup', userData)
//     }
// }
export function signupFailed(error){
    return {
        type: SIGNUP_FAILED,
        error
    }
}

export const userSignupRequest = userData => dispatch => axios.post('api/v1/auth/signup', userData)
    .then((res) => {
        const {
            token,
            email
        } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
    })
