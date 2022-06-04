import React,{ useState } from 'react'
import { Box, createTheme, Stack, ThemeProvider,Paper } from "@mui/material";
import AdminNavbar from '../common/adminNav/AdminNavbar';
import AdminSidebar from '../common/adminNav/AdminSidebar';
import { Grid, makeStyles } from "@material-ui/core";
import { styled } from '@mui/material/styles';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Panels from './Admin/panels';
import Home2 from './Admin/home';
import PanelMembers from './Admin/PanelMembers';
import Registrations from './Admin/Registrations';
import StudentGroups from './Admin/StudentGroups';
import Submissions from './Admin/Submissions';
import Enquiry from './Admin/Enquiry';
import Grading from './Admin/Grading';
import Marking_Schemes from './Admin/Marking_Schemes';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Admin = () => {
  const [mode, setMode] = useState("light");
  return (
    <div>
     
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <AdminNavbar/>
       
        <Grid container spacing={0}>
        <Grid item xs={2}>
      
        <AdminSidebar setMode={setMode} mode={mode}/>
         </Grid>
         <Grid item xs={10} style={{padding:"100px" }}>
           <Routes>
             <Route exact path='/' element={<Home2/>}/>
             <Route exact path='/panel' element={<Panels/>}/>
             <Route exact path='/panelMember' element={<PanelMembers/>}/>
             <Route exact path='/Registrations' element={<Registrations/>}/>
             <Route exact path='/StudentGroups' element={<StudentGroups/>}/>
             <Route exact path='/submissions' element={<Submissions/>}/>
             <Route exact path='/research' element={<Marking_Schemes/>}/>
             <Route exact path='/enquiry' element={<Enquiry/>}/>
             <Route exact path='/grading' element={<Grading/>}/>
           </Routes>
        
         
        
         </Grid>
       </Grid>
       
        
        
       
      </Box>
     
    </div>
  )
}

export default Admin;