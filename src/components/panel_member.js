import React ,{useState} from 'react'
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import PanelNavbar from '../common/PanelMemberNav/PanelNav';
import PanelSidebar from '../common/PanelMemberNav/PanelSideNav';
import { Grid, makeStyles } from "@material-ui/core";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Panel_Member/Home';
import StudentGroup from './Panel_Member/StudentGroup';
import Submissions from './Panel_Member/Submissions';
import MarkingScheme from './Panel_Member/MarkingScheme';
import Notifications from './Panel_Member/Notifications';
import Viva from './Panel_Member/Viva';


export const Panel_member = () => {
  const [mode, setMode] = useState("light");
  return (
    <div>
       <Box bgcolor={"background.default"} color={"text.primary"}>
        <PanelNavbar/>
        <Grid container spacing={0}>
        <Grid item  xs={2}>
        <PanelSidebar setMode={setMode} mode={mode}/>
         </Grid>

         <Grid item xs={10} style={{padding:"100px" }}>
           <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route exact path='/studentgroups' element={<StudentGroup/>}/>
             <Route exact path='/submissions' element={<Submissions/>}/>
             <Route exact path='/markingscheme' element={<MarkingScheme/>}/>
             <Route exact path='/notifications' element={<Notifications/>}/>
             <Route exact path='/viva' element={<Viva/>}/>
           </Routes>
        
         
        
         </Grid>
         </Grid>
       
      </Box>
    </div>
  )
}
export default Panel_member;