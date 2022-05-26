import * as React from 'react';
import Box from '@mui/material/Box';
import {useState,useEffect} from "react";
import Typography from '@mui/material/Typography';
import {createResponse} from '../../../actions/response';
import Modal from '@mui/material/Modal';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';
import {useDispatch} from 'react-redux'
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '650px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ResponseModel = ({StaffId , StudentId}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    //StaffId , StudentId  ,status, Message
  const [Message, setMessage] = useState('');
  const [status , setStatus] = useState('');



const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(createResponse({StaffId , StudentId  ,status, Message}));
         
    clear();
    handleClose();
            
};
const clear =()=>{
    //setStatus('pending');
    //style={{marginLeft: "1400px" , marginBottom: "10px"}}
  }
 


  return (

          <div>
      
      
      <Button color="primary"  variant="contained"  startIcon={<AddIcon />} onClick={handleOpen} >Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
        <Form   onSubmit={handleSubmit}>
        <div className="modal-header bg-info text-white">
                    <h5 className="modal-title text-white">Update User</h5>
                    
                        
                </div>



                <FormGroup>
    <Label for="panel">
         Status
    </Label>
    <Input
      id="status"
      name="status"
      type="select"
      onChange={(e)=> setStatus(e.target.value)}
      
    >
        <option value = "Select status">
        Select status
      </option>
      <option value = "Accept">
       Accept
      </option>
      <option value = "Reject">
      Reject
      </option>
      <option value = "pending">
      pending
      </option>
     
      
    </Input>
  </FormGroup>
  
      
  <FormGroup>
    <Label for="Message">
    Message
    </Label>
    <Input
      id="Message"
      name="Message"
      placeholder="with a placeholder"
      type="text"
      value={Message}  onChange={(e)=> setMessage(e.target.value)}
      style={{width: "580px"}}
    />
  </FormGroup>



        



  
  


  <Button variant="contained" type="submit" >
    Submit
  </Button>
  <Button onClick={handleClose} variant="contained" style={{marginLeft: "10px"}}>Cancel</Button>
<br/>

       </Form>
         
          
        </Box>
      </Modal>
    </div>
      
  )
}

export default ResponseModel ;