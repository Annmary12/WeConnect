import axios from 'axios';
import { CREATE_BUSINESS_SUCCESSFUL, CREATE_BUSINESS_FAILED} from './types';

export function createBusinessResponse(response){
    return {
        type: CREATE_BUSINESS_SUCCESSFUL,
        response
    };
}

export function createBusinessError(error){
    return {
        type: CREATE_BUSINESS_FAILED,
        error
    }
}

export const createBusinessRequest = bookData => dispatch => axios.post('api/v1/business/', bookData)
    .then((res) => {
        dispatch(createBusinessResponse(res.data));
    }).catch((error) => {
        dispatch(createBusinessError(error));
    });


// import axios from 'axios';

// export function addBusiness(business){
//     return {
//         type: 'ADD_BUSINESS',
//         business
//     }
// }

// export function createBusinessRequest(businessData){
//     return dispatch => {
//         return axios.post('api/v1/business/', businessData)
//         .then(businessData => {
//             dispatch(addBusiness(businessData.data.business))
//     });
// }
// }