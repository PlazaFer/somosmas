import React, { useEffect, useState } from 'react'
import { getAllActivities } from '../../Services/Home'
import CardComponent from '../Card/CardComponent'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import { useHistory } from 'react-router-dom'
import { Container, Grid, Typography, Box } from '@mui/material'
import useStyles from './Styles/StyledAct'

const ActivitiesList = () => {
  const classes = useStyles()
  const [activities, setActivities] = useState([])
  const history = useHistory()

  const handleSubmit = (name, id) => {
    history.push(`/activities/${id}`, { title: name })
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await getAllActivities()
      setActivities(data)
    }
    getData()
  }, [])

  const lastActivities = activities.slice(-6)

  return (
    <Container>
      <Box className={classes.containerTitle}>
        <Typography variant='h5' className={classes.title}>Ultimas Actividades</Typography>
      </Box>
        <Grid
          container 
          spacing={4} 
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          {lastActivities.map((activity) => (
              <Grid
                item
                key={activity.id}
                sm={12}
                md={6}
                lg={4}
                className={classes.gridItem}
              >
                <CardComponent
                  key={activity.id}
                  title={activity.name}
                  image={activity.image}
                  description={activity.description}
                  leerMasLink={() => handleSubmit(activity.name, activity.id)}
                />
              </Grid>
          ))}
        </Grid>
      <DecorativeLine />
    </Container>
  )
}

export default ActivitiesList
