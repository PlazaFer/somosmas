import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useStyles } from './styles/appBarResponsiveStyles';


export const AppbarResponsive = ({ setOpen, open }) => {

    const classes = useStyles();

    return(
        <>
        <AppBar color="inherit" position="fixed" className={classes.container}>
        <Toolbar>
          <Box className={classes.containerHeaderMobile}>
          {open ? (
            <FontAwesomeIcon
              icon={faXmark}
              className={classes.icon}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className={classes.icon}
              onClick={() => setOpen(!open)}
            />
          )}
          <img 
            src='/images/LOGO-SOMOS-MAS.png'
            alt='Logo ong'
            className={classes.logoHeader}
          />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.containerToolbar}></Toolbar>
      </>
    )
};