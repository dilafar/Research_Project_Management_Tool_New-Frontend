import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import {thead ,Table , Card} from 'reactstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getAllResponseByID} from '../../actions/response';
import Button from '@mui/material/Button';
import './response.css';
import DeleteModelResponse from '../../common/model/supervisorModel/DeleteResponseModel';

const Notifications = () => {
  const dispatch = useDispatch();
  const responses = useSelector((state) => state.response);


  useEffect(()=>{
        dispatch(getAllResponseByID());
        
  },[dispatch])
  return (
    <div>
    <Card style={{boxShadow: '10px'}}>
    <div className="modal-header bg-info text-white" style={{marginBottom: '100px'}}>
                    <h5 className="modal-title text-white">Notifications</h5>
                    
                        
                </div>
                
         {responses.length === 0 ? (
              <div className=" alert alert-info text-center mt-3">
              Your Notification is empty
              </div>
                ) : (
                    <>
                     {responses.map((response) => (
        <div className="cart-item d-md-flex justify-content-between" key={responses._id}><span className="remove-item"><DeleteModelResponse response={response}/></span>
        <div className="px-3 my-3">
           
           
                <div className="cart-item-product-info" >
                    <h2 className="cart-item-product-title">Message</h2>
                    <p>{response.Message}</p>
                    <h2 className="cart-item-product-title ">Status</h2>
                    <p className=" badge badge-secondary">{response.status}</p>
                    
                </div>
               
              
            
        </div>
   
      
    </div>
       ))}
    </>
)}
<br/>
<br/>


</Card>
    
    
    </div>
  )
}

export default Notifications;