import axios   from 'axios';

const url = 'http://localhost:5000';


export const signIn = (formdata) => axios.post(`${url}/user/signin`,  formdata);
export const signUp = (formdata) => axios.post(`${url}/user/signup`,  formdata);
export const staffsignup = (formdata) => axios.post(`${url}/user/staffsignup`,  formdata);
export const fetchStaff = (page) => axios.get(`${url}/user/staff?page=${page}`);
export const fetchUser = (page) => axios.get(`${url}/user/student?page=${page}`);
export const deleteStaff = (id) => axios.delete(`${url}/user/staff/${id}`);
export const deleteUser = (id) => axios.delete(`${url}/user/student/${id}`);