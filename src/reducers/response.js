import {FETCH_ALL_RESPONSE  ,CREATE_RESPONSE } from '../constants/actionTypes';

const responsereducer = (response=[] , action)=>{

    switch(action.type){
        case CREATE_RESPONSE :
            return [...response , action.payload];
        case FETCH_ALL_RESPONSE :
            return action.payload;
        default:
            return response;
    }

};
export default responsereducer;