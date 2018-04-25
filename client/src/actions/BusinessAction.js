import axios from 'axios';

export function addBusiness(business){
    return {
        type: 'ADD_BUSINESS',
        business
    }
}

export function createBusinessRequest(businessData){
    return dispatch => {
        return axios.post('api/v1/business/', businessData)
        .then(businessData => {
            dispatch(addBusiness(businessData.data.business))
    });
}
}