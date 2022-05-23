import {FETCH_ALL_USER , DELETE_USER ,FETCH_ALL_STAFF , DELETE_STAFF ,UPDATE_STAFF,UPDATE_USER } from '../constants/actionTypes';
import * as api from '../api/index';

export const getAllStaff = (page) => async (dispatch) => {
    try {
      const { data }  = await api.fetchStaff(page);
      console.log(data);
      dispatch({ type: FETCH_ALL_STAFF , payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const getAllUser = (page) => async (dispatch) => {
    try {
      const { data }  = await api.fetchUser(page);
      console.log(data);
      dispatch({ type: FETCH_ALL_USER , payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteStaff = (id) => async (dispatch) => {
    try {
       await api.deleteStaff(id);
  
      dispatch({ type: DELETE_STAFF, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteUser = (id) => async (dispatch) => {
    try {
       await api.deleteUser(id);
  
      dispatch({ type: DELETE_USER, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateStaff = (id , staff) => async(dispatch)=>{
    try {
        const { data }  = await api.updateStaff(id , staff);
        console.log(data);
        dispatch({ type: UPDATE_STAFF , payload: data });
      } catch (error) {
        console.log(error);
      }
};

export const updateUser = (id , user) => async(dispatch)=>{
  try {
      const { data }  = await api.updateUser(id , user);
      console.log(data);
      dispatch({ type: UPDATE_USER , payload: data });
    } catch (error) {
      console.log(error);
    }
};