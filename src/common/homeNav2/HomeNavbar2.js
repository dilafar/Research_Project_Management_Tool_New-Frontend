
import React ,{useState,useEffect} from "react";

import { AppBar, Toolbar, Typography ,Button, Container , Paper , Grid , Avatar ,TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styled from "@emotion/styled";
import {Link} from 'react-router-dom';


import Box from '@mui/material/Box';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const HomeNavbar2 = () => {
  return (
    <AppBar position="stick"  color="inherit" ><StyledToolbar><Typography variant="h6" sx={{display: {xs:"none", sm:"block"} , color: "black"}}>PMP</Typography>
    <Button  component={Link} to="/auth" variant="contained" endIcon={<AccountCircleIcon />}>
       Login
    </Button>
    </StyledToolbar></AppBar>
  )
}

export default HomeNavbar2;