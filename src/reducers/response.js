import {FETCH_ALL_RESPONSE  ,CREATE_RESPONSE , DELETE_RESPONSE } from '../constants/actionTypes';

const responsereducer = (response=[] , action)=>{

    switch(action.type){
        case CREATE_RESPONSE :
            return [...response , action.payload];
        case FETCH_ALL_RESPONSE :
            return action.payload;
        case DELETE_RESPONSE : 
            return response.filter((data)=> data._id !== action.payload);
        default:
            return response;
    }

};
export default responsereducer;