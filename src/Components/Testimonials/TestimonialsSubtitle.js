import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './styles/testimonialsSubtitleStyles';



export const TestimonialsSubtitle = () => {

    const classes = useStyles();

    return(
        <Box className={classes.containerSubtitle}>
            <Typography className={classes.subtitle} variant='h5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
        </Box>
    )
}