import React from 'react'
import { Typography } from '@mui/material'
import useStyles from './nosotrosStyles'

const NosotrosText = ({ text }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="body1" className={classes.typographySize}>
        {text}
      </Typography>
    </>
  )
}
export default NosotrosText
