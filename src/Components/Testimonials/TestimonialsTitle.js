import React from 'react';
import { Typography, Box } from '@mui/material';
import { useStyles } from './styles/TestimonialsTitleStyle';


export const TestimonialsTitle = () => {

    const classes = useStyles();
    
    return(
        <Box className={classes.containerTitle}>
            <Typography variant='h3' className={classes.title}>Testimonios</Typography>
        </Box>
    )
}