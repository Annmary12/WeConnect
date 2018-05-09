import axios from 'axios';
import { FETCH_BUSINESS_SUCCESSFUL, FETCH_ONE_BUSINESS_SUCCESSFUL} from './types';

export function fetchBusinessSuccess(businesses){
    return{
        type: FETCH_BUSINESS_SUCCESSFUL,
        businesses
    }
}

export const fetchBusinessesRequest = () => (dispatch) =>
axios.get('/api/v1/businesses')
.then((response) => {
    dispatch(fetchBusinessSuccess(response.data.businesses
))
})
.catch(error => {
    throw(error);
})

export function fetchOneBusinessSuccess(businesses){
    return{
        type: FETCH_ONE_BUSINESS_SUCCESSFUL,
        businesses
    }
}

export const fetchOneBusinessRequest = (id) => (dispatch) => 
axios.get(`/api/v1/businesses/${id}`)
.then((response) => {
    dispatch(fetchOneBusinessSuccess(response.data.businesses))
})
.catch(error => {
    throw(error);
})
