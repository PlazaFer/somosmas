import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import useStyles from '../School/StyledAppBar'

const Header = () => {
  const classes = useStyles()

  const history = useHistory();

  return (
    <>
      <div className={classes.lineToys}></div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolB}>
          <Box className={classes.boxLogoDeOng}>
            <img src="/images/LOGO-SOMOS-MAS.png" alt="Ong Logo" width="100" />
          </Box>

          <Box className={classes.boxLogoDeCampana}>
            <img
              src="/images/Logotipo-campaña-juguetes.png"
              alt="Campaing Logo"
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
        <Typography className={classes.sloganToys}>
          Juguetes por mas sonrisas.
        </Typography>
      </AppBar>
    </>
  )
}

export default Header
