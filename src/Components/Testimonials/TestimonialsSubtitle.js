import React from 'react';
import { Container, Typography } from '@mui/material';
import { useStyles } from './styles/testimonialsSubtitleStyles';



export const TestimonialsSubtitle = () => {

    const classes = useStyles();

    return(
        <Container className={classes.containerSubtitle}>
            <Typography className={classes.subtitle} variant='h5'>Estos son testimonios de personas que logramos ayudar gracias a tu apoyo.</Typography>
        </Container>
    )
}