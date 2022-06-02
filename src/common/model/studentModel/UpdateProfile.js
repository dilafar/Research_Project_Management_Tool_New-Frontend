import * as React from 'react';
import Box from '@mui/material/Box';
import {useState,useEffect} from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {updateStudent2} from '../../../actions/user'
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';
import {useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '650px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const UpdateModelStudentProfile = ({student}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstname , setfirstname] = useState('');
  const [lastname , setlastname] = useState('');
  const [gender , setgender] = useState('');
  const [dob , setdob] = useState('');
  const [email , setemail] = useState('');
  const [address , setaddress] = useState('');
  const [contactnumber , setcontactnumber] = useState('');
  const [faculty , setfaculty] = useState('');
  const [image , setimage] = useState('');


  useEffect(()=>{
    if({student}){
       setfirstname(student.firstname);
       setlastname(student.lastname);
       setgender(student.gender);
       setdob(student.dob);
       setemail(student.email);
       setaddress(student.address);
       setcontactnumber(student.contactnumber);
       setfaculty(student.faculty);
       setimage(student.image);
       
    }
},[student]);

const handleSubmit = (e) =>{
    e.preventDefault();

     dispatch(updateStudent2(student._id ,{ firstname , lastname , gender ,  dob , email , address , contactnumber , faculty , image}));
         
  //  console.log({});
    clear();
    handleClose();
            
};
const clear =()=>{
  setfirstname("");
  setlastname("");
  setgender("");
  setdob("");
  setemail("");
  setaddress("");
  setcontactnumber(0);
  setfaculty("");
  setimage("");
    
  }
 


  return (

          <div>
      <Button color="success"  variant="contained" endIcon={<UpdateIcon/>} onClick={handleOpen}>Update</Button>
      
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


                <Stack direction="row" spacing={3}>
                <FormGroup>
    <Label for="fname">
      First Name
    </Label>
    <Input
      id="fname"
      name="firstname"
      placeholder="with a placeholder"
      type="text"
      value={firstname}  onChange={(e)=> setfirstname(e.target.value)}
      style={{width: "280px"}}
    />
  </FormGroup>
  <FormGroup>
    <Label for="lname">
      Last Name
    </Label>
    <Input
      id="lname"
      name="lastname"
      placeholder="with a placeholder"
      type="text"
      value={lastname}  onChange={(e)=> setlastname(e.target.value)}
      style={{width: "280px"}}
    />
  </FormGroup>
  </Stack>

  <FormGroup tag="fieldset">
    <legend>
      Gender
    </legend>
    <FormGroup check>
      <Input
        name="gender"
        type="radio"
        value = "Male"
        checked = {gender === 'Male'}
        onChange={()=> setgender("Male")}
      />
      {' '}
      <Label check>
         Male
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="gender"
        type="radio"
        value = "Female"
        checked = {gender === 'Female'}
        onChange={()=> setgender("Female")}
      />
      {' '}
      <Label check>
         Female
      </Label>
    </FormGroup>
</FormGroup>

<FormGroup>
    <Label for="exampleDate">
      Date Of Birth
    </Label>
    <Input
      id="exampleDate"
      name="dob"
      placeholder="date placeholder"
      type="date"
      value={dob}  onChange={(e)=> setdob(e.target.value)}
    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleSelect">
      Faculty
    </Label>
    <Input
      id="exampleSelect"
      name="faculty"
      type="select"
      onChange={(e)=> setfaculty(e.target.value)}
    >
       <option value ={student.faculty}>
        {student.faculty}
      </option>
      <option value = "Computing">
        Computing
      </option>
      <option value = "Engineering">
        Engineering
      </option>
      <option value = "Management">
        Management
      </option>
      <option value = "Medicine">
        Medicine
      </option>
      <option value = "Research">
        Research
      </option>
    </Input>
  </FormGroup>

  <FormGroup>
    <Label for="exampleNumber">
      Phone Number
    </Label>
    <Input
      id="exampleNumber"
      name="contactnumber"
      placeholder="number placeholder"
      type="text"
      value={contactnumber}  onChange={(e)=> setcontactnumber(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Address
    </Label>
    <Input
      id="exampleText"
      name="address"
      type="textarea"
      value={address}  onChange={(e)=> setaddress(e.target.value)}
    />
  </FormGroup>
 
    <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
      value={email}  onChange={(e)=> setemail(e.target.value)}
      style={{width : "580px"}}
    />
  </FormGroup>
 
  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
   <br/>
     <FileBase type="file" id="exampleFile"
                 multiple={false}
                 onDone={({base64})=> setimage(base64)}
                /><br/>
    <FormText>
      This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
    </FormText>
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

export default UpdateModelStudentProfile;