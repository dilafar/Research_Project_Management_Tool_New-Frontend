import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import {thead ,Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import  PaginationitemStaff from './Staff/Paginations';
import PaginationitemStudent from './Student/Pagination';
import Button from '@mui/material/Button';
import Staff from './Staff/Staff';
import Student from './Student/Student';



function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Registrations = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get('page') || 1 ;
  const {staffs} = useSelector((state) => state.staff);
  const {users} = useSelector((state) => state.user);
  const [all , setall] = useState(true);
  const  [other , setother] = useState(false);

  const switchmode1 =()=>{
    setall(true);
    setother(false);
  }
  const switchmode2 =()=>{
    setall(false);
    setother(true);
  }
  return (
    <div>
      <Button color="primary"  variant="contained" onClick={switchmode1} style={{marginLeft: "2px" , marginBottom: "10px"}}>Staff</Button>
     <Button color="primary"  variant="contained"  onClick={switchmode2} style={{marginLeft: "20px" , marginBottom: "10px"}}>Student</Button>
     { all  && (
       <> 
     <Table hover>
  <thead>
    <tr>
      <th>
        ID
      </th>
      <th>
        Full Name
      </th>
      <th>
        Faculty
      </th>
      <th>
        Email
      </th>
      <th>
        StaffID
      </th>
      <th>
        Type
      </th>
      <th>
        ContactNumber
      </th>
      <th>
        Status
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
{staffs?.map((staff)=>(
    < Staff  key={staff._id} staff={staff}/>
))}
    
  </tbody>
</Table>

<br/>
<PaginationitemStaff page={page}/>
</>
  )}

{ other && (
       <> 
     <Table hover>
  <thead>
  <tr>
      <th>
        ID
      </th>
      <th>
        Full Name
      </th>
      <th>
        Faculty
      </th>
      <th>
        Email
      </th>
      <th>
        StudentID
      </th>
     
      <th>
        ContactNumber
      </th>
      <th>
        Status
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
{users?.map((user)=>(
    <Student  key={user._id} user={user}/>
))}
    
  </tbody>
</Table>

<br/>
<PaginationitemStudent page={page}/>
</>
  )}

    </div>

    
  )
}

export default Registrations