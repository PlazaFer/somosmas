import { Typography, Box } from '@mui/material';
import useStyles from './styles/graciasStyles';

const Gracias = () => {
    const classes = useStyles();

    return(
        <Box className={classes.Containertexto}>
            <img src='/images/nenesDonacion.png' alt='Nenes felices' className={classes.image}/>
            <Typography variant='h4' className={classes.text}>Gracias por tu colaboracion</Typography>
        </Box>
    );
};

export default Gracias;