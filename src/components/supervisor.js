import React,{useState} from 'react'
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import SupervisorNavbar from '../common/SupervisorNav/SupervisorNav';
import SupervisorSidebar from '../common/SupervisorNav/SupervisorSideNav';
import { Grid, makeStyles } from "@material-ui/core";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Supervisor/Home';
import StudentGroup from './Supervisor/StudentGroup';
import MarkingScheme from './Supervisor/MarkingScheme';
import Submissions from './Supervisor/Submissions';
import Notifications from './Supervisor/Notifications';

const Supervisor = () => {
  const [mode, setMode] = useState("light");
  return (
    <div>
       <Box bgcolor={"background.default"} color={"text.primary"}>
        <SupervisorNavbar/>
        <Grid container spacing={0}>
        <Grid item xs={2}>
        <SupervisorSidebar setMode={setMode} mode={mode}/>
         </Grid>
         <Grid item xs={10} style={{padding:"100px" }}>
           <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route exact path='/studentgroups' element={<StudentGroup/>}/>
             <Route exact path='/markingScheme' element={<MarkingScheme/>}/>
             <Route exact path='/submissions' element={<Submissions/>}/>
             <Route exact path='/notifications' element={<Notifications/>}/>
             
           </Routes>
        
         
        
         </Grid>
         </Grid>
       
      </Box>
    </div>
  )
}
export default Supervisor;