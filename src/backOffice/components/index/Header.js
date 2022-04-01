import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import useStyles from '../../styles/headerStyles'

const Header = ({ open, setOpen }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar color="inherit" position="fixed" className={classes.appBar}>
        <Toolbar>
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
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </>
  )
}

export default Header
