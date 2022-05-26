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



const Notifications = () => {

  const dispatch = useDispatch();
  const requests = useSelector((state) => state.request);


  useEffect(()=>{
        dispatch(getAllRequestByID());
        
  },[dispatch])
  return (
    <div><div>Notifications {requests.length}</div>
    <Card style={{ margin: "100px" , padding : "100px"}}>
         {requests.length === 0 ? (
              <div className=" alert alert-info text-center mt-3">
              Your Notification is empty
              </div>
                ) : (
                    <>
                     {requests.map((request) => (
        <div className="cart-item d-md-flex justify-content-between" key={request._id}><span className="remove-item"><i className="fa fa-times"></i></span>
        <div className="px-3 my-3">
           
               <div style={{display: 'flex'}}>
                <div className="cart-item-product-info" >
                    <h2 className="cart-item-product-title">eeeeeeeeee</h2>
                    <p>rrrrrrrr</p>
                    <h2 className="cart-item-product-title">eeeeeeeeee</h2>
                    <p>rrrrrrrr</p>
                    <h2 className="cart-item-product-title">eeeeeeeeee</h2>
                    <p>rrrrrrrr</p>
                </div>
                <div className="cart-item-product-info" style={{marginLeft: '600px'}}>
                <h2 className="cart-item-product-title">eeeeeeeeee</h2>
                    <p>rrrrrrrr</p>
                    <ResponseModel StaffId={request.StaffId}  StudentId = {request.StudentId}/>
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