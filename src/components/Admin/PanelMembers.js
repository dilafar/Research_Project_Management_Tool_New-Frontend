import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import {thead ,Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getpanelmembers} from '../../actions/user';
import PanelMember  from './panelMember/PanelMember';
import Button from '@mui/material/Button';






const Registrations = () => {
  const dispatch = useDispatch();
  const {members} = useSelector((state) => state.staff);
  const [all , setall] = useState(true);
  const  [other , setother] = useState(false);

  useEffect(()=>{
        dispatch(getpanelmembers());
  },[dispatch])

  return (
    <div>
      
    
     <Table hover>
  <thead>
    <tr>
      <th>
        Staff ID
      </th>
      <th>
        Full Name
      </th>
      <th>
        Faculty
      </th>
      <th>
      EducationQualification
      </th>
      <th>
      Pastresearchexperiance
      </th>
      <th>
      ResearchSpeacializedArea
      </th>
      <th>
       Panel
      </th>
      <th>
        Status
      </th>
   
    </tr>
  </thead>
  <tbody>
{members?.map(panelmember =>
    panelmember.type === 'Panel-Member' ?
    <PanelMember  key={panelmember._id} panelmember={panelmember}/>
    : ''
)}
    
  </tbody>
</Table>



    </div>

    
  )
}

export default Registrations