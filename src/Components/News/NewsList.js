import React, { useEffect } from 'react'
import { getNews } from '../../redux/NewsReducers/newsReducerThunk'
import CardComponent from '../Card/CardComponent'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import { useHistory } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import useStyles from './styles/novedadesStyles'
import ActivityContent from '../Activities/AntivityContent'
import { useSelector, useDispatch } from 'react-redux'

const NewsList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { news } = useSelector((state) => state.news)
  const history = useHistory()

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  const lastNews = news.slice(-6)

  const handleSubmit = (name, id) => {
    history.push(`/news/${id}`, { title: name })
  }

  return (
    <Container>
      <h2>Ultimas Novedades</h2>
      <Container className={classes.containerThree}>
        <Grid container className={classes.cardList}>
          {lastNews.map((row) => {
            return (
              <div key={row.id}>
                <CardComponent
                  key={row.id}
                  title={row.name}
                  image={row.image}
                  description={row.content}
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

export default NewsList
