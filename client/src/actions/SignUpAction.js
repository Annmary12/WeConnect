import axios from 'axios';

export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('api/v1/auth/signup', userData)
    }
}
// const userSignupRequest = (userData) => {
  
// }

// export default userSignupRequest;