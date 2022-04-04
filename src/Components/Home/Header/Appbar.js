import React from "react";
import { useSelector } from "react-redux";
import { headerData } from "./config";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles/appbarStyles";

export const Appbar = ({ handleLogout }) => {
  const classes = useStyles();

  const { isLogin, rol_type } = useSelector((state) => state.auth);

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Box className={classes.container}>
          <Box className={classes.subContainer}>
            <Box className={classes.containerLogo}>
              <img
                src="/Images/LOGO-SOMOS MAS.png"
                alt=""
                className={classes.logosm}
              />
            </Box>
            <Box className={classes.linksContainer}>
              {headerData.map((links) => (
                <NavLink
                  key={links.name}
                  to={links.url}
                  className={classes.link}
                >
                  {links.name}
                </NavLink>
              ))}
            </Box>
          </Box>
          <Box className={classes.buttonsContainer}>
          {!isLogin && 
          <>
            <NavLink to="/login" className={classes.buttonLink}>
              <Button size="small" color="secondary" variant="contained">
                Login
              </Button>
            </NavLink>
            <NavLink to="/register" className={classes.buttonLink}>
              <Button size="small" color="secondary" variant="contained">
                Register
              </Button>
            </NavLink>
            </>
          }
          {isLogin && rol_type === 'Admin' &&
              <NavLink
                to='/backoffice'
                className={classes.buttonLink}
              >
                <Button
                  variant='contained'
                  size="small"
                  color='secondary'
                >
                  Backoffice
                </Button>
              </NavLink>
          }
          {isLogin &&
              <NavLink
                className={classes.buttonLink}
                to='/'
              >
                <Button
                  size="small"
                  variant="contained"
                  color='secondary'
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </NavLink>
          }
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
