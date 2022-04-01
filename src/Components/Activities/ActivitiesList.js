import React, { useEffect, useState } from 'react'
import { getAllActivities } from '../../Services/Home'
import CardComponent from '../Card/CardComponent'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import { useHistory } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import useStyles from './Styles/StyledAct'
import ActivityContent from './AntivityContent'

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
      <h2>Ultimas Actividades</h2>
      <Container className={classes.containerThree}>
        <Grid container className={classes.cardList}>
          {lastActivities.map((row) => {
            return (
              <div className={classes.divContent} key={row.id}>
                <CardComponent
                  key={row.id}
                  title={row.name}
                  image={row.image}
                  description={row.description}
                  leerMasLink={() => handleSubmit(row.name, row.id)}
                />
              </div>
            )
          })}
        </Grid>
      </Container>
      <DecorativeLine />
    </Container>
  )
}

export default ActivitiesList
