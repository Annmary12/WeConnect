import axios from 'axios';
import { FETCH_BUSINESS_SUCCESSFUL, FETCH_ONE_BUSINESS_SUCCESSFUL} from './types';

/**
 *
 * @param {object} businesses
 * @returns {object} businesses
 */
export function fetchBusinessSuccess(businesses){
    return{
        type: FETCH_BUSINESS_SUCCESSFUL,
        businesses
    }
}

/**
 * @description action to fetch all businesses
 * @param {object} userData
 * @returns {object} userData
 */
export const fetchBusinessesRequest = () => (dispatch) =>
axios.get('/api/v1/businesses')
.then((response) => {
    dispatch(fetchBusinessSuccess(response.data.businesses
))
})
.catch(error => {
    throw(error);
})

/**
 *
 * @param {object} business
 * @returns {object} business
 */
export function fetchOneBusinessSuccess(businesses){
    return{
        type: FETCH_ONE_BUSINESS_SUCCESSFUL,
        businesses
    }
}

/**
 * @description action to fetch a particular business
 * @param {object} userData
 * @returns {object} userData
 */
export const fetchOneBusinessRequest = (id) => (dispatch) => 
axios.get(`/api/v1/businesses/${id}`)
.then((response) => {
    dispatch(fetchOneBusinessSuccess(response.data.businesses))
})
.catch(error => {
    throw(error);
})
