import React, { useState, useContext } from "react";
import "./navbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import MyDrawer from "../MobileNavBar/MyDrawer";
import UserContext from "../../helpers/UserContext";
import MyLoggedInDrawer from "../MobileNavBar/MyLoggedInDrawer";


const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matchMedia = useMediaQuery(theme.breakpoints.down("sm"));
  const { user } = useContext(UserContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const loggedInUserNavBar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{color: "white"}}>
        <Toolbar className="toolbar-nav" variant="root">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jobly
          </Typography>
          {matchMedia ? ( 
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}>
                <MenuIcon /> 
              </IconButton>
          ) : (
          <>
          <NavLink className="btn-btn-navbar" to="/companies" style={{ textDecoration: 'none', color: "white" }} activeStyle={{borderBottom: "5px double"}}>Companies</NavLink>
          <NavLink className="btn-btn-navbar" to="/jobs" style={{ textDecoration: 'none', color: "white" }} activeStyle={{borderBottom: "5px double"}}>Jobs</NavLink>
          <NavLink className="btn-btn-navbar" to="/profile" style={{ textDecoration: 'none', color: "white" }} activeStyle={{borderBottom: "5px double"}}>Profile</NavLink>
          <NavLink className="btn-btn-navbar" to="/applied-jobs" style={{ textDecoration: 'none', color: "white" }} activeStyle={{borderBottom: "5px double"}}>Applied Jobs</NavLink>
          <NavLink className="btn-btn-navbar" to="/login" style={{ textDecoration: 'none', color: "white" }} activeStyle={{borderBottom: "5px double"}} onClick={props.logout}>Log out {user ? user.username : null}</NavLink>    
          </>
          )}
          </Toolbar>
          {open ? <MyLoggedInDrawer 
                      open={open} 
                      handleDrawerOpen={handleDrawerOpen}
                      handleDrawerClose={handleDrawerClose}
                      logout={props.logout}
                  /> 
          : null}
      </AppBar>
    </Box>
    )
  }

  const loggedOutUserNavBar = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{color: "white"}}>
        <Toolbar className="toolbar-nav" variant="root">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jobly
          </Typography>
          {matchMedia ? ( 
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}>
                <MenuIcon /> 
              </IconButton>
          ) : (
          <>
          <NavLink className="btn-btn-navbar" to="/" style={{ textDecoration: 'none', color: "white" }}>Home</NavLink>
          <NavLink className="btn-btn-navbar" to="/login" style={{ textDecoration: 'none', color: "white" }} activeStyle={{borderBottom: "5px double"}}>Login</NavLink>
          <NavLink className="btn-btn-navbar" to="/sign-up" style={{ textDecoration: 'none', color: "white" }} activeStyle={{borderBottom: "5px double"}}>Signup</NavLink>    
          </>
          )}
          </Toolbar>
          {open ? <MyDrawer 
                      open={open} 
                      handleDrawerOpen={handleDrawerOpen}
                      handleDrawerClose={handleDrawerClose}
                  /> 
          : null}
      </AppBar>
    </Box>
    )
  }
  return <div>{user ? loggedInUserNavBar() : loggedOutUserNavBar()}</div>;
}


export default NavBar