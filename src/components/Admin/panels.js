import React , { useState, useEffect } from 'react';
import './paneldata.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddModelPanel from '../../common/model/panelModel/AddModel';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getAllPanel} from '../../actions/panel';
import Panel from './panel';

const Panels = () => {
  const dispatch = useDispatch();
  const panels = useSelector((state)=> state.panel);

  useEffect(()=>{
        dispatch(getAllPanel());
        console.log(panels);
  },[dispatch])

  return (
    <div>
         <AddModelPanel />
          <ul className ="list-group">
      <li href="#" className="list-group-item title" style={{ background: '#5bc0de', fontWeight: 'bold' , color: '#FFFFFF' , border: '2px solid #DDDDDD'}}>
        Autonomous Intelligent Machines and Systems (AIMS) - Panel 1
      </li>
      <li  className="list-group-item text-left">
        
      <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'1rem'}}>
    { panels?.map(paneldata => 
     
     paneldata.panel === 'panel 1' ?
       
       
          <div >
            <Panel paneldata={paneldata}  key={paneldata._id} />
         </div>

         :""
        
        )}



  </div>


      </li>
      <li href="#" className="list-group-item title" style={{ background: '#5bc0de', fontWeight: 'bold' , color: '#FFFFFF' , border: '2px solid #DDDDDD'}}>
          Machine Learning and Soft Computing (MLSC) - Panel 2
      </li>
      <li  className="list-group-item text-left">
        
      <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'1rem'}}>
    { panels?.map(paneldata => 
     
     paneldata.panel === 'panel 2' ?
       
       
          <div >
            <Panel paneldata={paneldata}  key={paneldata._id} />
         </div>

         :""
        
        )}



  </div>




      </li>
      <li href="#" className="list-group-item title" style={{ background: '#5bc0de', fontWeight: 'bold' , color: '#FFFFFF' , border: '2px solid #DDDDDD'}}>
        Knowledge Inspired Computing (KIC) - Panel 3
      </li>
      <li  className="list-group-item text-left">
      <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'1rem'}}>
    { panels?.map(paneldata => 
     
     paneldata.panel === 'panel 3' ?
       
       
          <div >
            <Panel paneldata={paneldata}  key={paneldata._id} />
         </div>

         :""
        
        )}



  </div>
      </li>
      <li href="#" className="list-group-item title" style={{ background: '#5bc0de', fontWeight: 'bold' , color: '#FFFFFF' , border: '2px solid #DDDDDD'}}>
         Computing for Inclusive and Equitable Society (CIEC) - Panel 4
      </li>
      <li  className="list-group-item text-left">
      <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'1rem'}}>
    { panels?.map(paneldata => 
     
     paneldata.panel === 'panel 4' ?
       
       
          <div >
            <Panel paneldata={paneldata}  key={paneldata._id} />
         </div>

         :""
        
        )}



  </div>
      </li>
      <li href="#" className="list-group-item title" style={{ background: '#5bc0de', fontWeight: 'bold' , color: '#FFFFFF' , border: '2px solid #DDDDDD'}}>
          Computing Infrastructure and Security (CIS) - Panel 5
      </li>
      <li  className="list-group-item text-left">
      <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'1rem'}}>
    { panels?.map(paneldata => 
     
     paneldata.panel === 'panel 5' ?
       
       
          <div >
            <Panel paneldata={paneldata}  key={paneldata._id} />
         </div>

         :""
        
        )}



  </div>
      </li>
      <li href="#" className="list-group-item title" style={{ background: '#5bc0de', fontWeight: 'bold' , color: '#FFFFFF' , border: '2px solid #DDDDDD'}}>
           Software Systems & Technologies (SST) - Panel 6
      </li>
      <li  className="list-group-item text-left">
      <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'1rem'}}>
    { panels?.map(paneldata => 
     
     paneldata.panel === 'panel 6' ?
       
       
          <div >
            <Panel paneldata={paneldata}  key={paneldata._id} />
         </div>

         :""
        
        )}



  </div>
      </li>
      </ul>
    </div>

  )
}
export default Panels;