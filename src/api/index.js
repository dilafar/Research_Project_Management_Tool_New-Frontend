import axios   from 'axios';

//const url = 'http://localhost:5000';
const url = 'https://project-management-tool-app.herokuapp.com';

export const signIn = (formdata) => axios.post(`${url}/user/signin`,  formdata);
export const signUp = (formdata) => axios.post(`${url}/user/signup`,  formdata);
export const staffsignup = (formdata) => axios.post(`${url}/user/staffsignup`,  formdata);
export const fetchStaff = (page) => axios.get(`${url}/user/staff?page=${page}`);
export const fetchUser = (page) => axios.get(`${url}/user/student?page=${page}`);
export const deleteStaff = (id) => axios.delete(`${url}/user/staff/${id}`);
export const deleteUser = (id) => axios.delete(`${url}/user/student/${id}`);
export const updateStaff = (id , formdata) => axios.put(`${url}/user/staff/${id}`, formdata);
export const updateUser = (id , formdata) => axios.put(`${url}/user/student/${id}`, formdata);
export const updateStudent = (id , formdata) => axios.put(`${url}/user/StudentProfile/${id}`, formdata);
export const createPanel = (formdata) => axios.post(`${url}/panel/add`,  formdata);
export const fetchPanel = () => axios.get(`${url}/panel`);
export const updatePanel = (id , formdata) => axios.put(`${url}/panel/${id}`,formdata);
export const deletePanel = (id) => axios.delete(`${url}/panel/${id}`);
export const fetchUser2 = () => axios.get(`${url}/user`);
export const updatePanelMember = (id , formdata) => axios.put(`${url}/user/panel/${id}`, formdata);
export const fetchSingleStaff = (id) => axios.get(`${url}/user/${id}`);
export const fetchSingleStudent = (id) => axios.get(`${url}/user/new/${id}`);
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

export const deleteRequest = (id) => axios.delete(`${url}/request/${id}`);
export const deleteResponse = (id) => axios.delete(`${url}/response/${id}`);

//student_Group
export const createStudentGroup = (formdata) => axios.post(`${url}/group/add`,  formdata ,{
  headers:{
    Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
});

export const fetchStudentGroup = () => axios.get(`${url}/group`);
export const updateStudentGroup = (id , formdata) => axios.put(`${url}/group/${id}`,formdata);
export const deleteStudentGroup = (id) => axios.delete(`${url}/group/${id}`);
export const fetchStudentGroupByStudentId = () => axios.get(`${url}/group/student` ,{
  headers:{
    Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
});
export const fetchStudentGroupBySupervisorId = () => axios.get(`${url}/group/supervisor` ,{
  headers:{
    Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
});
export const fetchStudentGroupByCoSupervisorId = () => axios.get(`${url}/group/cosupervisor` ,{
  headers:{
    Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
});
