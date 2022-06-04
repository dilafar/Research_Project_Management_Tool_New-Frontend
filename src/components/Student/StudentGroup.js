import React ,{useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import {createstudentgroup} from '../../actions/studentgroup';
import { useNavigate ,  useLocation} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import decode from 'jwt-decode';
import {getgroupByIDStudent} from '../../actions/studentgroup';
import {thead ,Table } from 'reactstrap';

import FileBase from 'react-file-base64';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
import Button from '@mui/material/Button';

 



const StudentGroup = () => {
  

  const [leader , setleader] = useState('');
  const [student1 , setmember1] = useState('');
  const [student2 , setmember2] = useState('');
  const [student3 , setmember3] = useState('');
  const [leaderid , setleaderid] = useState('');
  const [student1id , setmember1id] = useState('');
  const [student2id , setmember2id] = useState('');
  const [student3id , setmember3id] = useState('');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


  const location = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [Supervisor , setsupid]= useState('');
  const [CoSupervisor , setcosupid] = useState('');
  const [sup , setsup] = useState(false);
  const [cosup , setcosup] = useState(false);
  const [status , setstatus] = useState(true);
 
  const {studentGroup} = useSelector((state) => state.sgroup);
  //leader,leaderid,student1,student1id , student2, student2id , student3, student3id, Supervisor , CoSupervisor, userId ,
  useEffect(() => {
    const token = user?.result;

    if (token) {
      console.log(token._id);
      console.log(token.CoSupervisorId);
      console.log(token.SupervisorId)
      setsupid(token.SupervisorId);
      setcosupid(token.CoSupervisorId);
      if(token.SupervisorStatus === 'Approved'){
        setsup(true);
      }
      if(token.CoSupervisorStatus === 'Approved'){
        setcosup(true);
      }
      if(token.Group === 'created'){
        setstatus(false);
      }
      
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);


 

  useEffect(()=>{
        dispatch(getgroupByIDStudent());
        console.log(studentGroup);
        
  },[dispatch])
  console.log(studentGroup);
 

  const handleSubmit = (e) =>{
          e.preventDefault();
        
                  dispatch(createstudentgroup({leader,leaderid,student1,student1id , student2, student2id , student3, student3id, Supervisor , CoSupervisor}));
         
        //  console.log({title ,desc, img,categories, price});
          clear();
  };

  const clear =()=>{
    setleader('');
    setmember1('');
    setmember2('');
    setmember3('');
    
  }
 console.log(studentGroup);

  return (
    
          <div >
       <div className="modal-header bg-info text-white">
                    <h5 className="modal-title text-white">Create Student Group</h5>
                    
                        
                </div>  <br/>
  
 <Form  onSubmit={handleSubmit}>
      


     
 <FormGroup>

              
    <Label for="leader">
      Leader
    </Label>
    <Input
      id="leader"
      name="leader"
      placeholder="with a placeholder"
      type="text"
      value={leader}  onChange={(e)=> setleader(e.target.value)}
     
    />
  </FormGroup>
  <FormGroup>

              
<Label for="leaderid">
  Leader ID
</Label>
<Input
  id="leaderid"
  name="leaderid"
  placeholder="with a placeholder"
  type="text"
  value={leaderid}  onChange={(e)=> setleaderid(e.target.value)}
 
/>
</FormGroup>

  <FormGroup>

              
<Label for="student1">
  Member 1
</Label>
<Input
  id="student1"
  name="student1"
  placeholder="with a placeholder"
  type="text"
  value={student1}  onChange={(e)=> setmember1(e.target.value)}
 
/>
</FormGroup>

<FormGroup>

              
<Label for="student1id">
  Member 1 ID
</Label>
<Input
  id="student1id"
  name="student1id"
  placeholder="with a placeholder"
  type="text"
  value={student1id}  onChange={(e)=> setmember1id(e.target.value)}
 
/>
</FormGroup>
    
 
<FormGroup>

              
<Label for="student2">
  Member 2
</Label>
<Input
  id="student2"
  name="student2"
  placeholder="with a placeholder"
  type="text"
  value={student2}  onChange={(e)=> setmember2(e.target.value)}
 
/>
</FormGroup>

<FormGroup>

              
<Label for="student2id">
  Member 2 ID
</Label>
<Input
  id="student2id"
  name="student2id"
  placeholder="with a placeholder"
  type="text"
  value={student2id}  onChange={(e)=> setmember2id(e.target.value)}
 
/>
</FormGroup>

<FormGroup>

              
<Label for="student3">
  Member 3 
</Label>
<Input
  id="student3"
  name="student3"
  placeholder="with a placeholder"
  type="text"
  value={student3}  onChange={(e)=> setmember3(e.target.value)}
 
/>
</FormGroup>


<FormGroup>

              
<Label for="student3id">
  Member 3 ID
</Label>
<Input
  id="student3id"
  name="student3id"
  placeholder="with a placeholder"
  type="text"
  value={student3id}  onChange={(e)=> setmember3id(e.target.value)}
 
/>
</FormGroup>
{  sup && (
  <>
<p>Supervisor</p>
<p>{Supervisor}</p>
</>
)}
{ cosup && (
  <>
<p>Co-Supervisor</p>
<p>{CoSupervisor}</p>
</>
)}


  {  status && (
  <>

  <Button style={{width: "200px"}} color="success" type="submit" variant="contained" endIcon={<SendIcon />}>
    Submit
  </Button>
  </>
  )}
<br/>
  
</Form>
<diV>
<Table hover id="quiz">
  <thead>
    <tr>
      <th>
        Supervisor
      </th>
      <th>
        Co - Supervisor
      </th>
      <th>
        Students
      </th>
      <th>
     Action
      </th>
      
     
    
    </tr>
  </thead>
  <tbody>
{studentGroup?.map((group)=>(
    <tr>
    <th scope="row">
    
    <p>{group.Supervisor}</p>
    </th>
    <td><p>{group.CoSupervisor}</p></td>
    <td>
    <div><p>{group.leader}</p>
    <p>{group.student1}</p>
    <p>{group.student2}</p>
    <p>{group.student3}</p>
   
    </div>
    </td>
    <td>
    <div>
    <p>{group.updatedAt}</p>
    </div>
    </td>
    
   
   
   
  </tr>
 
))}
    
  </tbody>
</Table>
</diV>


    </div>
      
    
  )
}

export default StudentGroup;