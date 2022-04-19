import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './styles/novedadesStyles'
import Title from '../Title/Title'
import { Grid,Box } from '@mui/material'
import NewsText from './NewsText'
import CardComponent from '../Card/CardComponent'
import { useHistory } from 'react-router-dom'
import Spinner from '../../shared/Spinner/Spinner'
import { getNews } from '../../redux/NewsReducers/newsReducerThunk'
import { NewsVideo } from './NewsVideo'


const textNews = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
}

const News = () => {
  const dispatch = useDispatch()
  const { status, news } = useSelector((state) => state.news)
  const classes = useStyles()

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  //Paso de parametros del ID de cada noticia al link de Leer Mas
  const history = useHistory()
  const handleSubmit = (name, id) => {
    history.push(`/news/${id}`, { id: news.id })
  }

  return (

    <>
    <Title title="Novedades" imgSrc={textNews.image} />

    {status === "loading" ? <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>

    <Spinner color={'#C63A3B'} />
    </Box>:
    <>
    <NewsText text={textNews.text} />
    <Grid
            container
            sx={{ marginBottom: "43px" }}
            spacing={2}
          >
            {news.map(({ id, name, image, content }) => (
              <Grid item sm={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center" }} >
                <CardComponent
                  key={id}
                  title={name}
                  image={image}
                  description={content}
                  leerMasLink={() => handleSubmit(name, id)}
                />
              </Grid>
            ))}
        </Grid>  
        <NewsVideo />  
    </>
    
    }
    </>
  )
}

export default News
