import {FETCH_ALL_PANEL , UPDATE_PANEL , DELETE_PANEL ,CREATE_PANEL } from '../constants/actionTypes';
import * as api from '../api/index';


export const deletePanel = (id) => async (dispatch) => {
    try {
       await api.deletePanel(id);
  
      dispatch({ type: DELETE_PANEL, payload: id });
      alert("Panel deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  export const updatePanel = (id , panel) => async(dispatch)=>{
    try {
        const { data }  = await api.updatePanel(id , panel);
        console.log(data);
        dispatch({ type: UPDATE_PANEL , payload: data });
        alert("Panel Assigned Successfully");
      } catch (error) {
        console.log(error);
        alert("Panel  error");
      }
};

export const createPanel =(panel)=>async(dispatch)=>{
    try{
        const {data} = await api.createPanel(panel);
        console.log(data);
        dispatch({type: CREATE_PANEL , payload: data});
        alert("Panel Created Successfully");
    }catch(error){
        console.log(error);
        alert("Panel error");
    }
}

export const getAllPanel =()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchPanel();
        console.log(data);
        dispatch({type: FETCH_ALL_PANEL , payload: data });

    }catch(error){
        console.log(error);
    }
}