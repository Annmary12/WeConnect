import { GET_USER_SUCCESSFUL, GET_USER_FAILED } from './types';
import axios from 'axios';

export function getUserSuccessful(user) {
    return {
        type: GET_USER_SUCCESSFUL,
        user
    }  
};

export function getUserFailed(error) {
    return {
        type: GET_USER_FAILED,
        error
    }   
};
export const getUserRequest = id => dispatch =>
    axios.get(`api/v1/auth/user/${id}`)
        .then((response) => {
            dispatch(getUserSuccessful(response.data.getUser));
        })
        .catch(() => {
            dispatch(getUserFailed('User not found'));
        });