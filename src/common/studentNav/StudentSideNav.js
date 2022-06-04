import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import React from "react";
  import { Container, makeStyles, Typography } from "@material-ui/core";
  import {Link} from 'react-router-dom';

  const useStyles = makeStyles((theme) => ({
    container: {
      height: "100vh",
      color: "white",
      paddingTop: theme.spacing(8),
      backgroundColor: theme.palette.primary.main,
      
      top: 0,
      [theme.breakpoints.up("sm")]: {
        backgroundColor: "white",
        color: "#555",
        border: "1px solid #ece7e7",
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(3),
        cursor: "pointer",
      },
    },
    icon: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
      },
    },
    text: {
      fontWeight: 500,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));
  
  const StudentSidebar = ({mode,setMode}) => {
    const classes = useStyles();
    return (
      <div style={{position: "fixed" }}>
      <Container className={classes.container}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Student">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Student/supervisors">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Supervisors" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  component={Link} to="/Student/studentgroups">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="studentgroups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Student/submissions">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Submissions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Student/research">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Marking Scheme" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Student/qanda">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Q and A" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Student/notifications">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="notifications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Student/viva">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Viva" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
        </Container>
        </div>
    )
  }
  export default StudentSidebar;