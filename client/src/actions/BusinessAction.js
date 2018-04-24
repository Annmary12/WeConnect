import axios from 'axios';

export function createBusinessRequest(business){
    return dispatch => {
        return axios.post('api/v1/business/', business);
    }
}