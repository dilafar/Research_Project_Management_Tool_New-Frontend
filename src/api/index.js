import axios   from 'axios';

const url = 'http://localhost:5000';


export const signIn = (formdata) => axios.post(`${url}/user/signin`,  formdata);
export const signUp = (formdata) => axios.post(`${url}/user/signup`,  formdata);
export const staffsignup = (formdata) => axios.post(`${url}/user/staffsignup`,  formdata);
export const fetchStaff = (page) => axios.get(`${url}/user/staff?page=${page}`);
export const fetchUser = (page) => axios.get(`${url}/user/student?page=${page}`);
export const deleteStaff = (id) => axios.delete(`${url}/user/staff/${id}`);
export const deleteUser = (id) => axios.delete(`${url}/user/student/${id}`);
export const updateStaff = (id , formdata) => axios.put(`${url}/user/staff/${id}`, formdata);
export const updateUser = (id , formdata) => axios.put(`${url}/user/student/${id}`, formdata);
export const createPanel = (formdata) => axios.post(`${url}/panel/add`,  formdata);
export const fetchPanel = () => axios.get(`${url}/panel`);
export const updatePanel = (id , formdata) => axios.put(`${url}/panel/${id}`,formdata);
export const deletePanel = (id) => axios.delete(`${url}/panel/${id}`);
export const fetchUser2 = () => axios.get(`${url}/user`);
export const updatePanelMember = (id , formdata) => axios.put(`${url}/user/panel/${id}`, formdata);
export const fetchSingleStaff = (id) => axios.get(`${url}/user/${id}`);
export const createRequest = (formdata) => axios.post(`${url}/request/add`,  formdata ,{
    headers:{
      Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
  });

export const fetchRequestById = () => axios.get(`${url}/request/find` ,{
    headers:{
      Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
  });

  export const createResponse = (formdata) => axios.post(`${url}/response/add`,  formdata ,{
    headers:{
      Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
  });

export const fetchResponseById = () => axios.get(`${url}/response/find` ,{
    headers:{
      Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
  });
