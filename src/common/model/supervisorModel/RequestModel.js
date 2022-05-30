import * as React from 'react';
import Box from '@mui/material/Box';
import {useState,useEffect} from "react";
import Typography from '@mui/material/Typography';
import {createRequest} from '../../../actions/request';
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
const RequestModel = ({StaffId , Type}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    //StaffId ,Type ,topic , discription,technology
  const [topic, settopic] = useState('');
  const [ discription ,setdiscription] = useState('');
  const [technology , settechnology] = useState('');


const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(createRequest({StaffId ,Type ,topic , discription,technology}));
         
    clear();
    handleClose();
            
};
const clear =()=>{
    //setStatus('pending');
    //style={{marginLeft: "1400px" , marginBottom: "10px"}}
  }
 


  return (

          <div>
      
      
      <Button color="primary"  variant="contained"  startIcon={<AddIcon />} onClick={handleOpen} style={{marginTop: "100px", padding: " 20px"}}>Add</Button>
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
    <Label for="topic">
      Topic
    </Label>
    <Input
      id="topic"
      name="topic"
      placeholder="with a placeholder"
      type="text"
      value={topic}  onChange={(e)=> settopic(e.target.value)}
      style={{width: "580px"}}
    />
  </FormGroup>

  <FormGroup>
    <Label for="discription">
    description
    </Label>
    <Input
      id="discription"
      name="discription"
      type="textarea"
      value={discription}  onChange={(e)=> setdiscription(e.target.value)}
    />
  </FormGroup>

        
  <FormGroup>
    <Label for="technology">
    technology
    </Label>
    <Input
      id="technology"
      name="technology"
      placeholder="with a placeholder"
      type="text"
      value={technology}  onChange={(e)=> settechnology(e.target.value)}
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

export default RequestModel;