import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getallgroups} from '../../actions/studentgroup';
import {thead ,Table } from 'reactstrap';
import SingleViva from './SingleViva';
import Button from '@mui/material/Button';
import Singlegroup2 from './Singlegroup2';

const Grading = () => {
  const dispatch = useDispatch();
  const {groups} = useSelector((state) => state.sgroup);
   let count =1;
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
 <Button color="primary"  variant="contained" onClick={switchmode1} style={{marginLeft: "2px" , marginBottom: "10px"}}>viva</Button>
     <Button color="primary"  variant="contained"  onClick={switchmode2} style={{marginLeft: "20px" , marginBottom: "10px"}}>viva2</Button>

     { all  && (
       <> 
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
      
     
     
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
{ groups?.map((group)=>(
    <SingleViva key={group._id} group={group} count={count++}/>
))}
    
  </tbody>
</Table>

</>
  )}


{ other  && (
       <> 
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
      <th>
        Time
      </th>
      <th>
        panel
      </th>
     
    
    </tr>
  </thead>
  <tbody>
{ groups?.map((group)=>(
    <Singlegroup2  key={group._id} group={group} count={count++}/>
))}
    
  </tbody>
</Table>

</>
  )}

    </div>
  )
}

export default Grading;