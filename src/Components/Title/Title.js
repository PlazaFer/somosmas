import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import useStyles from './Styles'
import Logo from '../../image/logoSomosMas.png'

export default function Title({ imgSrc = Logo, title }) {
  let isLogo = imgSrc !== Logo ? false : true

  const classes = useStyles({ isLogo: isLogo })

  return (
    <>
      <Box
        component="img"
        className={classes.backgroundImage}
        src={imgSrc}
        alt={title}
      />
      <Container>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      </Container>
    </>
  )
}
