import {FETCH_ALL_RESPONSE  ,CREATE_RESPONSE } from '../constants/actionTypes';
import * as api from '../api/index';

export const createResponse =(response)=>async(dispatch)=>{
    try{
        const {data} = await api.createResponse(response);
        console.log(data);
        dispatch({type: CREATE_RESPONSE, payload: data});

    }catch(error){
        console.log(error);
    }
}

export const getAllResponseByID =()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchResponseById();
        console.log(data);
        dispatch({type: FETCH_ALL_RESPONSE , payload: data });

    }catch(error){
        console.log(error);
    }
}