import React , { useState, useEffect }from 'react';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody,CardImg,CardTitle,CardSubtitle,CardText } from 'reactstrap';


import Button from '@mui/material/Button';
import {ButtonBase} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import {Link, useNavigate} from  "react-router-dom";


const Supervisor = ({ staff}) => {
  const navigate = useNavigate();
  const open =()=>{
  
    navigate(`/Student/view/${staff._id}`);

}
  return (
    <Card style={{maxWidth: '500px' ,maxHeight: '500px'}} onClick={open}>
      
    <CardImg
      alt="Card image cap"
      src={staff.image}
      top
      width="100%"
      style={{maxHeight: '320px'}}
    />
    <CardBody>
      <CardTitle tag="h5">
     cccccccc
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        ccccccccccc
      </CardSubtitle>
      <CardText>
      cccccccccccc
      </CardText>
      <div style={{display: "flex"}}> 
    
    </div>
    </CardBody>
  </Card>
  )
}

export default Supervisor;