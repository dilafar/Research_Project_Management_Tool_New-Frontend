import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import {thead ,Table , Card} from 'reactstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getAllResponseByID} from '../../actions/response';
import Button from '@mui/material/Button';
import './response.css';

const Notifications = () => {
  const dispatch = useDispatch();
  const responses = useSelector((state) => state.response);


  useEffect(()=>{
        dispatch(getAllResponseByID());
        
  },[dispatch])
  return (
    <div><div>Notifications {responses.length}</div>
    <Card style={{ margin: "100px" , padding : "100px"}}>
         {responses.length === 0 ? (
              <div className=" alert alert-info text-center mt-3">
              Your Notification is empty
              </div>
                ) : (
                    <>
                     {responses.map((response) => (
        <div className="cart-item d-md-flex justify-content-between" key={responses._id}><span className="remove-item"><i className="fa fa-times"></i></span>
        <div className="px-3 my-3">
           
           
                <div className="cart-item-product-info" >
                    <h2 className="cart-item-product-title">eeeeeeeeee</h2>
                    <p>rrrrrrrr</p>
                    <h2 className="cart-item-product-title">eeeeeeeeee</h2>
                    <p>rrrrrrrr</p>
                    
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