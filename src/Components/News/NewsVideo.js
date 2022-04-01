import { Box, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import useStyles from './styles/novedadesStyles'

export const NewsVideo = () => {
  const classes = useStyles()
  return (
    <Box className={classes.containerVideo}>
      <Typography className={classes.videoTitle}>
        Conocé nuestro último evento.
      </Typography>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
        controls
        playing
      />
    </Box>
  )
}
