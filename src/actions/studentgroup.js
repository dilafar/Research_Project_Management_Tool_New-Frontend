import {FETCH_ALL_GROUP , FETCH_GROUP_STUDENT , FETCH_GROUP_SUPERVISOR ,FETCH_GROUP_COSUPERVISOR , CREATE_GROUP , UPDATE_GROUP ,DELETE_GROUP} from '../constants/actionTypes';
import * as api from '../api/index';

export const createstudentgroup =(details)=>async(dispatch)=>{
    try{
        const {data} = await api.createStudentGroup(details);
        console.log(data);
        dispatch({type: CREATE_GROUP , payload: data});

    }catch(error){
        console.log(error);
    }
}

export const getgroupByIDStudent =()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchStudentGroupByStudentId();
        console.log(data);
        dispatch({type: FETCH_GROUP_STUDENT , payload: data });

    }catch(error){
        console.log(error);
    }
}

export const getgroupByIDSupervisor =()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchStudentGroupBySupervisorId();
        console.log(data);
        dispatch({type: FETCH_GROUP_SUPERVISOR , payload: data });

    }catch(error){
        console.log(error);
    }
}

export const getgroupByIDCoSupervisor =()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchStudentGroupByCoSupervisorId();
        console.log(data);
        dispatch({type: FETCH_GROUP_COSUPERVISOR , payload: data });

    }catch(error){
        console.log(error);
    }
}
export const deleteGroup = (id) => async(dispatch)=>{
    try {
        const { data }  = await api.deleteStudentGroup(id);
        console.log(data);
        dispatch({ type: DELETE_GROUP , payload: id });
      } catch (error) {
        console.log(error);
      }
}

export const getallgroups = () =>async(dispatch)=>{
    try {
        const { data }  = await api.fetchStudentGroup();
        console.log(data);
        dispatch({ type: FETCH_ALL_GROUP , payload: data });
      } catch (error) {
        console.log(error);
      }
}

export const updateStudentGroup = (id , panel) => async(dispatch)=>{
    try {
        const { data }  = await api.updateStudentGroup(id , panel);
        console.log(data);
        dispatch({ type: UPDATE_GROUP , payload: data });
      } catch (error) {
        console.log(error);
      }
};