import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getgroupByIDSupervisor} from '../../actions/studentgroup';
import {thead ,Table } from 'reactstrap';

import Button from '@mui/material/Button';




const StudentGroup = () => {
  const dispatch = useDispatch();
  const {supervisorGroup} = useSelector((state) => state.sgroup);
 

  useEffect(()=>{
        dispatch(getgroupByIDSupervisor());
        console.log(supervisorGroup);
        
  },[dispatch])
  console.log(supervisorGroup);
  return (
    <div>student group</div>
  )
}

export default StudentGroup;