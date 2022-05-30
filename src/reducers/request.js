import {FETCH_ALL_REQUEST  ,CREATE_REQUEST , DELETE_REQUEST} from '../constants/actionTypes';

const requestreducer = (request=[] , action)=>{

    switch(action.type){
        case CREATE_REQUEST :
            return [...request , action.payload];
        case FETCH_ALL_REQUEST :
            return action.payload;
        case DELETE_REQUEST : 
            return request.filter((data)=> data._id !== action.payload);
        default:
            return request;
    }

};
export default requestreducer;