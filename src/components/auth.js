import React ,{useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import {signin ,signup ,staffsignup} from '../actions/auth'
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import useStyles from './style';
import sideimage from '../images/flying-hats_1.jpg'
import FileBase from 'react-file-base64';


import Box from '@mui/material/Box';
import { Form,FormGroup , Label ,Input ,option,Button,FormText, Card, CardBody } from 'reactstrap';
import HomeNavbar from "../common/homeNav/HomeNavbar";
import { Stack } from "@mui/material";



const Auth = () => {
  const [isSignup , setIsSignup] = useState(false);
  const [staff , setStaff] = useState(true);
  const [student , setStudent] = useState(false);

  const [firstname , setfirstname] = useState('');
  const [lastname , setlastname] = useState('');
  const [gender , setgender] = useState('');
  const [dob , setdob] = useState('');
  const [email , setemail] = useState('');
  const [type , settype] = useState('');
  const [password , setpassword] = useState('');
  const [confirmpassword , setconfirmpassword] = useState('');
  const [address , setaddress] = useState('');
  const [contactnumber , setcontactnumber] = useState('');
  const [studentID , setstudentID] = useState('');
  const [staffID , setstaffID] = useState('');
  const [faculty , setfaculty] = useState('');
  const [image , setimage] = useState('');
  const [educationQualification , seteducationQualification] = useState('');
  const [researchSpeacializedArea , setresearchSpeacializedArea] = useState('');
  const [pastresearchexperiance , setpastresearchexperiance] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigate();
 

 

  const handleSubmit = (e) =>{
          e.preventDefault();
          if(isSignup){
            if(staff){
                    dispatch(staffsignup({ firstname , lastname ,gender ,dob,type, email , password , confirmpassword,address,contactnumber,staffID,faculty,image,educationQualification,researchSpeacializedArea,pastresearchexperiance} , navigation));
            }else{
                    dispatch(signup({ firstname ,lastname ,gender,dob  , email ,password , confirmpassword , address , contactnumber , studentID , faculty ,image} , navigation));
            }
                 
          }else{
                  dispatch(signin({ email , password}, navigation));
          }
          console.log({ email , password , confirmpassword});
  };

  
  const switchMode = () => {
   
    setIsSignup((prevIsSignup) => !prevIsSignup);
   
  };

  const switchtoStudent =()=>{
    setStaff(false);
    setStudent(true);
  }
  const switchtoStaff =()=>{
    setStaff(true);
    setStudent(false);
  }

  return (
    
          <div >
         <HomeNavbar />
     <Card style={{padding: "10px" ,margin: "50px"}}>
       <CardBody >
      
         <Stack direction="row" spacing={3}>
         { isSignup  && (
       <>  

       <Button
    color="primary"
    outline
    onClick={switchtoStaff}
  >
    Staff
  </Button>
  <Button
    color="primary"
    outline
    onClick={switchtoStudent}
  >
    Student
  </Button>
  </>
  )}  
  </Stack>
        <Box>
       <Stack direction="row" spacing={3} justifyContent="center">
      <Form  onSubmit={handleSubmit}>
      { isSignup  && (
       <>  
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
      style={{width: "330px"}}
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
      style={{width: "330px"}}
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
{  staff && (
  <>
  <FormGroup tag="fieldset">
    <legend>
      Type
    </legend>
    <FormGroup check>
      <Input
        name="type"
        type="radio"
        value = "Suppervisor"
        checked = {type === 'Suppervisor'}
        onChange={()=> settype("Suppervisor")}
      />
      {' '}
      <Label check>
         Suppervisor
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="type"
        type="radio"
        value = "Co-Supervisor"
        checked = {type === 'Co-Supervisor'}
        onChange={()=> settype("Co-Supervisor")}
      />
      {' '}
      <Label check>
         Co-Supervisor
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="type"
        type="radio"
        value = "Panel-Member"
        checked = {type === 'Panel-Member'}
        onChange={()=> settype("Panel-Member")}
      />
      {' '}
      <Label check>
         Panel-Member
      </Label>
    </FormGroup>
</FormGroup>
</>
)}
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

  </> 
)} 
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
      style={{width : !isSignup ? "700px":" " }}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
      value={password}  onChange={(e)=> setpassword(e.target.value)}
    />
  </FormGroup>
  { isSignup  && (
       <> 

<FormGroup>
    <Label for="examplePassword">
      Confirm Password
    </Label>
    <Input
      id="examplePassword"
      name="confirmpassword"
      placeholder="password placeholder"
      type="password"
      value={confirmpassword}  onChange={(e)=> setconfirmpassword(e.target.value)}
    />
  </FormGroup>
  {  student && (
  <>

  <FormGroup>
    <Label for="id">
      studentID
    </Label>
    <Input
      id="id"
      name="studentID"
      placeholder="with a placeholder"
      type="text"
      value={studentID}  onChange={(e)=> setstudentID(e.target.value)}
     
    />
  </FormGroup>

  </>
  )}

 
 
  {  staff && (
  <>

<FormGroup>
    <Label for="id">
      Staff ID
    </Label>
    <Input
      id="id"
      name="staffID"
      placeholder="with a placeholder"
      type="text"
      value={staffID}  onChange={(e)=> setstaffID(e.target.value)}
     
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
    Education Qualification
    </Label>
    <Input
      id="exampleText"
      name="educationQualification"
      type="textarea"
      value={educationQualification}  onChange={(e)=> seteducationQualification(e.target.value)}
    />
  </FormGroup>


  <FormGroup>
    <Label for="exampleText">
    Specialized Research Area's
    </Label>
    <Input
      id="exampleText"
      name="researchSpeacializedArea"
      type="textarea"
      value={researchSpeacializedArea}  onChange={(e)=> setresearchSpeacializedArea(e.target.value)}
    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleText">
    Past Research Experiance
    </Label>
    <Input
      id="exampleText"
      name="pastresearchexperiance"
      type="textarea"
      value={pastresearchexperiance}  onChange={(e)=> setpastresearchexperiance(e.target.value)}
    />
  </FormGroup>
  </> 
)}
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

  </> 
)} 
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button>
    Submit
  </Button>
<br/>
  <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
</Form>
<Box>
<img   src={sideimage} alt="icon" height="1500" width="800"/>
</Box>
</Stack>
</Box>
</CardBody>
</Card>
    </div>
      
    
  )
}

export default Auth