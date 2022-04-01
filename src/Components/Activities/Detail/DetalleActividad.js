import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Typography } from '@mui/material'
import useStyles from '../Styles/StyledAct'
import { getActivityById } from '../../../redux/Activities/activitySlice'
import ActivityContent from '../AntivityContent'
import Spinner from '../../../shared/Spinner/Spinner'

const DetalleActividad = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { activitiesId, status } = useSelector((state) => state.activities)
  const params = useParams()
  console.log(status)

  useEffect(() => {
    dispatch(getActivityById(params.id))
  }, [dispatch])

  return (
    <div>
      {status !== 'success' ? (
        <Spinner color={'#C63A3B'} />
      ) : (
        <Box component="div" className={classes.container}>
          <Box component="div" className={classes.content}>
            <Typography variant="h4">{activitiesId.name}</Typography>
            <ActivityContent
              className={classes.typographySize}
              content={activitiesId.description}
            />
          </Box>
          <Box component="div" className={classes.image}>
            <img
              src={activitiesId.image}
              alt={activitiesId.name}
              className={classes.photo}
            />
          </Box>
        </Box>
      )}
    </div>
  )
}

export default DetalleActividad
