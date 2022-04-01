import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import Title from '../Title/Title'
import ShowModal from '../../Utils/AlertsProps'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import Spinner from '../../shared/Spinner/Spinner'
import useStyles from './Styles/StyledAct'
import CardComponent from '../Card/CardComponent'
import ActivitiesText from './ActitiviesText'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getActivity } from '../../redux/Activities/activitySlice'
import '../CardListStyles.css'
import ActivityContent from '../Activities/AntivityContent'

const activitiesMockInfo = {
  title: 'Actividades',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  image:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4im5qnV8g7HnbLYU9D0lEgHaDL%26pid%3DApi&f=1',
}

const alertText = {
  icon: 'error',
  title: 'Ups...',
  text: 'Algo salió mal!',
  footer: '<a href=""> Qué fue lo que paso? </a>',
}

const Actividades = () => {
  const dispatch = useDispatch()
  const { loading, error, activities } = useSelector(
    (state) => state.activities,
  )
  const classes = useStyles()
  console.log(activities)

  useEffect(() => {
    dispatch(getActivity())
  }, [dispatch])

  //Paso de parametros del ID de cada noticia al link de Leer Mas
  const history = useHistory()
  const handleSubmit = (name, id) => {
    history.push(`/activities/${id}`, { id: activities.id })
    console.log(id)
  }

  return (
    <div>
      <div className={classes.newsSpinner}>
        {error ? (
          <ShowModal
            icon={alertText.icon}
            title={alertText.title}
            text={alertText.text}
            footer={alertText.footer}
          />
        ) : (
          <>
            <Title
              title={activitiesMockInfo.title}
              imgSrc={activitiesMockInfo.image}
            />
            <Container>
              {loading ? (
                <Spinner color={'#C63A3B'} />
              ) : (
                <>
                  <ActivitiesText text={activitiesMockInfo.text} />
                  <Grid container className={classes.cardList}>
                    {activities.map((row) => {
                      return (
                        <div key={row.id}>
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
                  <DecorativeLine />
                </>
              )}
            </Container>
          </>
        )}
      </div>
    </div>
  )
}

export default Actividades
