import {AUTH, AUTH_STAFF} from '../constants/actionTypes';
import * as api from '../api/index';


export const signin = (formdata , navigate) => async(dispatch) =>{

    try{
        const {data} = await api.signIn(formdata);

        if(data.result.type){
            if(data.result.type === "Suppervisor"){
               
                console.log(data.result.type);
                dispatch({type: AUTH, data});
                navigate("/Supervisor");
            }else if(data.result.type === "admin"){
                console.log(data.result.type);
                dispatch({type: AUTH, data});
                navigate("/admin");
            }else if(data.result.type === "Panel-Member"){
                console.log(data.result.type);
                dispatch({type: AUTH, data});
                navigate("/Panel");
            }
         }else{
            console.log(data);
            dispatch({type: AUTH, data});
            navigate("/Student");
         }

        
    }catch(error){
            console.log(error);
    }
}

export const signup = (formdata , navigate) => async(dispatch) =>{

    try{
        const {data} = await api.signUp(formdata);
        console.log(data);
        dispatch({type: AUTH, data});
        navigate("/admin");
        
    }catch(error){
        console.log(error);
    }
}

export const staffsignup = (formdata , navigate) => async(dispatch) =>{

    try{
        const {data} = await api.staffsignup(formdata);
        console.log(data);
        dispatch({type: AUTH_STAFF, data});
        navigate("/admin");
        
    }catch(error){
        console.log(error);
    }
}