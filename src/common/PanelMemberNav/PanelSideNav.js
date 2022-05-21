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
  import { Container, makeStyles, Typography } from "@material-ui/core";
  import {Link} from 'react-router-dom';
  
  import React from "react";
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



  
  const PanelSidebar = ({mode,setMode}) => {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Panel">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Panel/studentgroups">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Studentgroups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Panel/submissions">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Submissions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Panel/markingscheme">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Markingscheme" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Panel/notifications">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Panel/viva">
              <ListItemIcon>
                <Settings />
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
    )
  }
  export default PanelSidebar;