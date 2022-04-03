import React from 'react';
import parse from 'html-react-parser';
import { Card, CardHeader, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useStyles } from './StylesCard';


const CardComponent = ({title,image,placeHolder,description,leerMasLink}) => {
  const classes = useStyles();


  return (
    <Card className={classes.container}>
      <CardHeader  className={classes.styleTitle}
        titleTypographyProps={{variant:'body1', fontWeight: 'bold'}}
        title={title}
       />
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        placeholder={placeHolder}
      />
      <CardContent>
        <Typography variant="body1" className={classes.styleDescription}>
        {parse(`${description}`)}
        </Typography>
      </CardContent>
      <CardActions >   
        { leerMasLink &&
        <Box className={classes.containerButton}>
             <Typography variant="body1" color="primary" onClick={leerMasLink} className={classes.button}>
               Leer más
             </Typography>
         </Box>
        }
      </CardActions>
    </Card>
  );
}

export default CardComponent;



