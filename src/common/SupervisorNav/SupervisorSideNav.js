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
      position: "sticky",
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
  
  const SupervisorSidebar = ({mode,setMode}) => {
    const classes = useStyles();
    return (
      <Container  className={classes.container}>
        <List>
          <ListItem disablePadding>
            <ListItemButton  component={Link} to="/Supervisor">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Supervisor/markingScheme">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="MarkingScheme" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Supervisor/studentgroups">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Studentgroups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Supervisor/submissions">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Submissions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Supervisor/notifications">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
          
          
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Q and A" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
        </Container>
    )
  }
  export default SupervisorSidebar;