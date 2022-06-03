import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getallgroups} from '../../actions/studentgroup';
import {thead ,Table } from 'reactstrap';
import Singlegroup from './Singlegroup';
import Button from '@mui/material/Button';
import Singlegroup2 from './Singlegroup2';

const StudentGroups = () => {
  
  const dispatch = useDispatch();
  const {groups} = useSelector((state) => state.sgroup);
   let count =1;

  useEffect(()=>{
        dispatch(getallgroups());
        
  },[dispatch])

  const printReport=()=>{
    let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
    let tableSelect = document.getElementById('quiz');
    let tableHtml = tableSelect?.outerHTML.replace(/ /g,'%20');
    let downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:'+dataType+', '+tableHtml;
    downloadLink.download = 'Quiz-Marks.xls';
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <div>
<Button color="primary"  variant="contained" onClick={printReport} style={{marginLeft: "2px" , marginBottom: "10px"}}>Supervisor</Button>


<Table hover id="quiz">
  <thead>
    <tr>
      <th>
        GroupID
      </th>
      <th>
        Names
      </th>
      <th>
        ITNumbers
      </th>
      
     
    
    </tr>
  </thead>
  <tbody>
{ groups?.map((group)=>(
    <Singlegroup  key={group._id} group={group} count={count++}/>
))}
    
  </tbody>
</Table>





    </div>
  )
}

export default StudentGroups;