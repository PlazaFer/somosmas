import React from 'react';
import Slider from "./Slider"
import {Box ,Typography} from '@mui/material'
import useStyles from '../School/styles/contentStyle'
import CountDown from '../Toys/CountDown'

const texts = {
    titleSchool: 'CAMPAÑA DE RECOLECCIÓN DE JUGUETES',
   
  }

const Content = () => {
  const classes = useStyles();
  return (
    <div>
        <div>
    
      <Box className={classes.bigBoxToys}>
        <Box className={classes.boxTitle}>
          <Typography className={classes.title}>
            Recibimos juguetes para repartir en nuestra red de escuelas.
          </Typography>
        </Box>
        <Box className={classes.boxTitle}>
        
        <Box className={classes.containerBoxToys}>
        <Typography className={classes.titleCamp}>{texts.titleSchool}</Typography> 
        <div>
        <CountDown />
        </div>
     
    </Box>
        </Box>

      </Box>
    </div>

    </div>
  );
}
 
export default Content;