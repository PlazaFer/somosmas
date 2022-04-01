import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import useStyles from './styledError404'

const Error404 = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <img src="images\sad-emoji-g9f5298da5_1920.png" alt="emoji triste" className={classes.img} />
            <Typography variant="h2" color="gray" className={classes.texto404}>
                404
            </Typography>
            <Typography variant="h5" color="gray" className={classes.textNotFound}>Page not found</Typography>
        </Box>
    )
}

export default Error404