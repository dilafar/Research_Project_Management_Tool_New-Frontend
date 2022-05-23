import React , { useState, useEffect }from 'react';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody,CardImg,CardTitle,CardSubtitle,CardText } from 'reactstrap';


import Button from '@mui/material/Button';
import {ButtonBase} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteModelPanel from '../../common/model/panelModel/DeleteModel';
import UpdateModelPanel from '../../common/model/panelModel/UpdateModel';







const Panel = ({ paneldata}) => {
   
    
   
  
  return (
    <Card style={{maxWidth: '500px' ,maxHeight: '300px'}} >
      
  
    <CardBody>
    <div style={{display: "flex"}}> 
      <CardTitle tag="h5">
      {paneldata.type}
      </CardTitle>
      
      <div style={{display: "flex" , marginLeft : "100px"}}> 
     <DeleteModelPanel paneldata={paneldata}/>

    <UpdateModelPanel paneldata={paneldata}/>
    </div>
    </div>
    </CardBody>
  </Card>
  )
}

export default Panel;