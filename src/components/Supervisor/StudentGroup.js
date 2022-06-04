import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getgroupByIDSupervisor} from '../../actions/studentgroup';
import {thead ,Table,thead ,Table , th ,td ,tr } from 'reactstrap';

import Button from '@mui/material/Button';
import Single from './Single';




const StudentGroup = () => {
  const dispatch = useDispatch();
  const {supervisorGroup} = useSelector((state) => state.sgroup);
 

  useEffect(()=>{
        dispatch(getgroupByIDSupervisor());
        console.log(supervisorGroup);
        
  },[dispatch])
  console.log(supervisorGroup);
  return (
    <div>
      <Table hover id="quiz">
  <thead>
    <tr>
      <th>
        Supervisor
      </th>
      <th>
        Students
      </th>
      <th>
     Action
      </th>
      
     
    
    </tr>
  </thead>
  <tbody>
{supervisorGroup?.map((group)=>(
    <Single  key={group._id} group={group} />
))}
    
  </tbody>
</Table>


    </div>
  )
}

export default StudentGroup;