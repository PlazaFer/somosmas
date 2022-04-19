import React, { useEffect } from 'react'
import { getNews } from '../../redux/NewsReducers/newsReducerThunk'
import CardComponent from '../Card/CardComponent'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import { useHistory } from 'react-router-dom'
import { Container, Grid, Typography, Box } from '@mui/material'
import useStyles from './styles/novedadesStyles'
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
      <Box className={classes.containerTitle}>
        <Typography variant='h5' className={classes.title}>Ultimas Novedades</Typography>
      </Box>
        <Grid 
          container 
          spacing={4} 
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          {lastNews.map((news) => (
              <Grid 
                item
                key={news.id}
                sm={12}
                md={6}
                lg={4}
                className={classes.gridItem}
              >
                <CardComponent
                  key={news.id}
                  title={news.name}
                  image={news.image}
                  description={news.content}
                  leerMasLink={() => handleSubmit(news.name, news.id)}
                />
              </Grid>
          ))}
        </Grid>
      <DecorativeLine />
    </Container>
  )
}

export default NewsList
