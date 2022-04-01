import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './styles/novedadesStyles'
import Title from '../Title/Title'
import { Container, Grid } from '@mui/material'
import NewsText from './NewsText'
import CardComponent from '../Card/CardComponent'
import { useHistory } from 'react-router-dom'
import Spinner from '../../shared/Spinner/Spinner'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import ShowModal from '../../Utils/AlertsProps'
import { getNews } from '../../redux/NewsReducers/newsReducerThunk'
import { NewsVideo } from './NewsVideo'
import ActivityContent from '../Activities/AntivityContent'

const alertText = {
  icon: 'error',
  title: 'Ups...',
  text: 'Algo salió mal!',
  footer: '<a href=""> Qué fue lo que paso? </a>',
}
const textNews = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
}

const News = () => {
  const dispatch = useDispatch()
  const { status, error, news } = useSelector((state) => state.news)
  const classes = useStyles()

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])
  const lastNews = news.slice(-9)

  //Paso de parametros del ID de cada noticia al link de Leer Mas
  const history = useHistory()
  const handleSubmit = (name, id) => {
    history.push(`/news/${id}`, { id: news.id })
  }

  return (
    <div>
      <div>
        {error ? (
          <ShowModal
            icon={alertText.icon}
            title={alertText.title}
            text={alertText.text}
            footer={alertText.footer}
          />
        ) : (
          <>
            {status !== 'success' ? (
              <div className={classes.newsSpinner}>
                <Spinner color={'#C63A3B'} />
              </div>
            ) : (
              <>
                <Title title="Novedades" imgSrc={lastNews[0].image} />
                <Container>
                  <NewsText text={textNews.text} />
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
                  <NewsVideo />
                  <DecorativeLine />
                </Container>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default News
