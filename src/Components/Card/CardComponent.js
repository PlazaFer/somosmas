import React from 'react';
import parse from 'html-react-parser';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useStyles } from './StylesCard';


const CardComponent = ({title,image,placeHolder,description,leerMasLink}) => {
  const classes = useStyles();


  return (
    <Card className={classes.container}>
      <div  className={classes.styleTitle}>
        <Typography variant='body1'>
            <b>{title}</b>
        </Typography>
       </div>

      <CardMedia
        component="img"
        height="194"
        image={image}
        alt=""
        placeholder={placeHolder}
      />
      <CardContent>
        <Typography variant="subtitle2" className={classes.styleDescription}>
        {parse(`${description}`)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >   
        { leerMasLink &&
          <div onClick={leerMasLink} className={classes.leerMas}>
            <Typography variant="subtitle2" color="primary">
              Leer más
            </Typography>
        </div>
        }
      </CardActions>
    </Card>
  );
}

export default CardComponent;