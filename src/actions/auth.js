import {AUTH, AUTH_STAFF} from '../constants/actionTypes';
import * as api from '../api/index';


export const signin = (formdata , navigate) => async(dispatch) =>{

    try{
        const {data} = await api.signIn(formdata);

        if(data.result.type){
            if(data.result.status === "Approved"){
            if(data.result.type === "Suppervisor"){
               
                console.log(data.result.type);
                dispatch({type: AUTH, data});
                alert("Login Successfull");
                navigate("/Supervisor");
            }else if(data.result.type === "Co-Supervisor"){

                console.log(data.result.type);
                dispatch({type: AUTH, data});
                alert("Login Successfull");
                navigate("/Supervisor");
            
            }else if(data.result.type === "admin"){
                console.log(data.result.type);
                dispatch({type: AUTH, data});
                alert("Login Successfull");
                navigate("/admin");
            }else if(data.result.type === "Panel-Member"){
                console.log(data.result.type);
                dispatch({type: AUTH, data});
                alert("Login Successfull");
                navigate("/Panel");
            } 
            }else{
                alert("Login unSuccessfull");  
            }
         }else{
            if(data.result.status === "Approved"){
                     console.log(data);
                     dispatch({type: AUTH, data});
                     alert("Login Successfull");
                     navigate("/Student");
            }else{
                alert("Login unSuccessfull"); 
            }
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
        navigate("/");
        
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