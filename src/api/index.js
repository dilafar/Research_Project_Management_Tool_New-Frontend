import axios   from 'axios';

const url = 'http://localhost:5000';


export const signIn = (formdata) => axios.post(`${url}/user/signin`,  formdata);
export const signUp = (formdata) => axios.post(`${url}/user/signup`,  formdata);
export const staffsignup = (formdata) => axios.post(`${url}/user/staffsignup`,  formdata);