import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
// import { SET_CURRENT_USER } from './types'

export function setCurrentUser(user) {
    return {
        type: 'SET_CURRENT_USER',
        user
    };
}

export function userLoginRequest(userData){
    return dispatch => {
        return axios.post('api/v1/auth/login', userData).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
            
        });
    }
}