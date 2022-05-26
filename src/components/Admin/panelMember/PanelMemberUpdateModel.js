import * as React from 'react';
import Box from '@mui/material/Box';
import {useState,useEffect} from "react";
import Typography from '@mui/material/Typography';
import {updatePanelMember} from '../../../actions/user';
import Modal from '@mui/material/Modal';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';
import {useDispatch} from 'react-redux'

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
const PanelMemberUpdateModel = ({panelmember}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [panel , setpanel] = useState('');


  useEffect(()=>{
    if({panelmember}){
        setpanel(panelmember.panel);
       
    }
},[panelmember]);

const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(updatePanelMember(panelmember._id ,{panel}));
         
    console.log({panel});
    clear();
    handleClose();
            
};
const clear =()=>{
    setpanel('');
    
  }
 


  return (

          <div>
      
      <UpdateIcon onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
        <Form   onSubmit={handleSubmit}>
        <div className="modal-header bg-info text-white">
                    <h5 className="modal-title text-white">Update Panel</h5>
                    
                        
                </div>


  
       <FormGroup>
    <Label for="categories">
      Panel
    </Label>
    <Input
      id="categories"
      name="panel"
      type="select"
      onChange={(e)=> setpanel(e.target.value)}
      
    >
        <option value = "Select State">
        Select Panel
      </option>
      <option value = "panel 1">
         panel 1
      </option>
      <option value = "panel 2">
        panel 2
      </option>
      <option value = "panel 3">
        panel 3
      </option>
      <option value = "panel 4">
        panel 4
      </option>
      
    </Input>
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

export default PanelMemberUpdateModel;