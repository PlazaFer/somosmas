import React from 'react';
import Slider from "./Slider"
import { Box, Typography } from '@mui/material'
import useStyles from './styles/contentStyle'
import CountDown from '../Toys/CountDown'

const texts = {
  titleSchool: 'CAMPAÑA DE RECOLECCIÓN DE ÚTILES ESCOLARES',

}

const Content = () => {
  const classes = useStyles();

  return (
    <>
      <Slider />
      <Box className={classes.bigBox}>
        <Box className={classes.boxTitle}>
          <Typography className={classes.title}>
            Recibimos materiales escolares para repartir en nuestra red de escuelas.
          </Typography>
        </Box>
        <Box className={classes.boxTitle}>
          <Box className={classes.containerBox}>
            <Typography className={classes.titleCamp}>{texts.titleSchool}</Typography>
            <Box>
              <CountDown />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Content;