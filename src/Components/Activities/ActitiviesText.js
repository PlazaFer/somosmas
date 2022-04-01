import React from 'react'
import { Typography } from '@mui/material'
import useStyles from './activityStyles'

const ActivitiesText = ({ text }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="body1" className={classes.typographySize}>
        {text}
      </Typography>
    </>
  )
}
export default ActivitiesText