import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import AppBar from '@mui/material/AppBar'
import { Divider, Button } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './StyledAppBar'

const Header = () => {
  const classes = useStyles()

  const history = useHistory();

  return (
    <>
      <div className={classes.line}></div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolB}>
          <Box className={classes.boxLogoDeOng}>
            <img src="images/logoSomosMas.png" alt="logo de ong" width="100" />
          </Box>
          <Box className={classes.boxLogoDeCampana}>
            <img
              src="images/logotipoCampañaEscuela.png"
              alt=""
              className={classes.logoDeCampaña}
            />
          </Box>
          <Box>
            <Button
              variant="outlined"
              size='small'
              className={classes.buttonInicio}
              onClick={() => history.push('/')}
            >
              inicio
            </Button>
            <Button
              variant="contained"
              size='small'
              className={classes.button}
              onClick={() => history.push('/donation')}
            >
              DONA
            </Button>
          </Box>
        </Toolbar>
        <Typography className={classes.slogan}>
          Nunca dejes de aprender!
        </Typography>
      </AppBar>
    </>
  )
}

export default Header
