import {FETCH_ALL_REQUEST  ,CREATE_REQUEST } from '../constants/actionTypes';
import * as api from '../api/index';

export const createRequest =(request)=>async(dispatch)=>{
    try{
        const {data} = await api.createRequest(request);
        console.log(data);
        dispatch({type: CREATE_REQUEST , payload: data});

    }catch(error){
        console.log(error);
    }
}

export const getAllRequestByID =()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchRequestById();
        console.log(data);
        dispatch({type: FETCH_ALL_REQUEST , payload: data });

    }catch(error){
        console.log(error);
    }
}