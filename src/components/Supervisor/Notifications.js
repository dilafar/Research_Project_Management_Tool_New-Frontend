import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import {thead ,Table , Card} from 'reactstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getAllRequestByID} from '../../actions/request';
import Button from '@mui/material/Button';
import './requestStyle.css';
import ResponseModel from '../../common/model/supervisorModel/ResponseModel';
import DeleteModelRequest from '../../common/model/supervisorModel/DeleteRequestModel';



const Notifications = () => {

  const dispatch = useDispatch();
  const requests = useSelector((state) => state.request);


  useEffect(()=>{
        dispatch(getAllRequestByID());
        
  },[dispatch])
  return (
    <div>
    <Card style={{boxShadow: '10px'}}>

    <div className="modal-header bg-info text-white" style={{marginBottom: '100px'}}>
                    <h5 className="modal-title text-white">Notifications</h5>
                    
                        
                </div>
         {requests.length === 0 ? (
              <div className=" alert alert-info text-center mt-3">
              Your Notification is empty
              </div>
                ) : (
                    <>
                     {requests.map((request) => (
        <div className="cart-item d-md-flex justify-content-between" key={request._id}><span className="remove-item"><DeleteModelRequest request={request}/></span>
        <div className="px-3 my-3">
           
               <div style={{display: 'flex'}}>
                <div className="cart-item-product-info" >
                    <h2 className="cart-item-product-title">Topic</h2>
                    <p>{request.topic}</p>
                    <h2 className="cart-item-product-title">Technologies</h2>
                    <p>{request.technology}</p>
                    <h2 className="cart-item-product-title">Description</h2>
                    <p>{request.discription}</p>
                </div>
                <div className="cart-item-product-info" style={{marginLeft: '600px'}}>
                <h2 className="cart-item-product-title">Date</h2>
                    <p>{request.updatedAt}</p>
                    <ResponseModel StaffId={request.StaffId}  StudentId = {request.StudentId} Type ={request.Type} ID={request.ID}/>
                    <br/>
                    <h2 className="cart-item-product-title">Requested Student ID :</h2>
                    <p>{request.ID}</p>
                    <h2 className="cart-item-product-title">Requested Student Email :</h2>
                    <p>{request.StudentId}</p>
                    </div>
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