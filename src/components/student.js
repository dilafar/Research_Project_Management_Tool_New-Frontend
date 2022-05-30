import React ,{useState} from 'react'
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import StudentNavbar from '../common/studentNav/StudentNav';
import StudentSidebar from '../common/studentNav/StudentSideNav';
import { Grid, makeStyles } from "@material-ui/core";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Student/Home';
import Supervisors from './Student/Supervisors';
import StudentGroup from './Student/StudentGroup';
import Submissions from './Student/Submissions';
import Assignments from './Student/Assignments';
import QandA from './Student/QandA';
import Notifications from './Student/Notifications';
import Viva from './Student/Viva';
import Research_Template from './Student/Research_Template';
import SupervisorDetails from './Student/SupervisorDetails';
import Profile from './Student/Profile';

const Student = () => {
  const [mode, setMode] = useState("light");
  return (
    <div>
       <Box bgcolor={"background.default"} color={"text.primary"}>
        <StudentNavbar/>
        <Grid container spacing={0}>
        <Grid item  xs={2}>
        <StudentSidebar setMode={setMode} mode={mode}/>
         </Grid>
         <Grid item xs={10} style={{padding:"100px" }}>
           <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route exact path='view/:id' element={<SupervisorDetails/>}/>
             <Route exact path='profile' element={<Profile/>}/>
             <Route exact path='/supervisors' element={<Supervisors/>}/>
             <Route exact path='/studentgroups' element={<StudentGroup/>}/>
             <Route exact path='/submissions' element={<Submissions/>}/>
             <Route exact path='/research' element={<Research_Template/>}/>
             <Route exact path='/qanda' element={<QandA/>}/>
             <Route exact path='/notifications' element={<Notifications/>}/>
             <Route exact path='/viva' element={<Viva/>}/>
           </Routes>
        
         
        
         </Grid>
         </Grid>
        
       
      </Box>
    </div>
  )
}

export default Student;