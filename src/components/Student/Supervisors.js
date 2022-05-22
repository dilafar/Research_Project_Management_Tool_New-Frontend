import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import Supervisor from './Supervisor';
import Paginationitem from './Pagination';
import Button from '@mui/material/Button';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}


const Supervisors = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get('page') || 1 ;
  const {staffs} = useSelector((state) => state.staff);
  const [all , setall] = useState(true);
  const  [other , setother] = useState(false);
  const [categorie , setcategories] = useState('');
  const [supervisor , setsupervisor]= useState('');
  const [coSupervisor , setcoSupervisor]= useState('');

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
       <Button color="primary"  variant="contained" onClick={switchmode1} style={{marginLeft: "2px" , marginBottom: "10px"}}>Supervisor</Button>
     <Button color="primary"  variant="contained"  onClick={switchmode2} style={{marginLeft: "20px" , marginBottom: "10px"}}>Co - Supervisor</Button>
      <br/>
      { all  && (
       <> 
      <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'1rem'}}>
    { staffs?.map(staff => 
     
     staff.type === 'Suppervisor' ?
       
       
          <div >
            <Supervisor staff={staff}  key={staff._id} />
         </div>

         :""
        
        )}



  </div>
  </>
  )}

{ other  && (
       <> 
            <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'1rem'}}>
    { staffs?.map(staff => 
     
     staff.type === 'Co-Supervisor' ?
       
       
          <div >
            <Supervisor staff={staff}  key={staff._id} />
         </div>

         :""
        
        )}



  </div>
  </>
  )}

  <br/>
<Paginationitem page={page}/>
    </div>
  )
}

export default Supervisors;