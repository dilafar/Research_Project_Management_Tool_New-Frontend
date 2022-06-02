import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getallgroups} from '../../actions/studentgroup';
import {thead ,Table } from 'reactstrap';
import SingleViva from './SingleViva';

const Grading = () => {
  const dispatch = useDispatch();
  const {groups} = useSelector((state) => state.sgroup);
   let count =1;

  useEffect(()=>{
        dispatch(getallgroups());
        
  },[dispatch])

  return (
    <div>


<Table hover>
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
        Panel
      </th>
    </tr>
  </thead>
  <tbody>
{ groups?.map((group)=>(
    <SingleViva key={group._id} group={group} count={count++}/>
))}
    
  </tbody>
</Table>




    </div>
  )
}

export default Grading;