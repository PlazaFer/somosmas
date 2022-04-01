import React, { useEffect } from 'react'
import { Typography, Container } from '@mui/material'
import DecorativeLine from './../DecorativeLine/DecorativeLine'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import useStyles from './contactoStyles'
import Title from './../Title/Title'
import ContactForm from '../ContactForm/ContactForm'

const contactoInfo = {
  title: 'Contacto',
  email: 'somosfundacionmas@gmail.com',
  instagram: '@SomosMás',
  facebook: 'Somos_Mas',
  teléfono: '+54 11 60112988',
  image:
    'https://res.cloudinary.com/danb0chax/image/upload/v1645799960/SomosMas/AdobeStock_232928548_Preview_gzxhsz.jpg',
}

const Contacto = () => {
  const classes = useStyles()

  return (
    <>
      <Title title={contactoInfo.title} imgSrc={contactoInfo.image} />

      <Container className={classes.container}>
        <ContactForm />
        <Typography variant="h6" className={classes.subtitle}>
          Otras vías de comunicación:
        </Typography>
        <Typography
          variant="h6"
          className={classes.mail}
          sx={{ fontWeight: '800' }}
        >
          {contactoInfo.email}
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          Nuestras redes sociales:
        </Typography>
        <div className={classes.redes}>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <InstagramIcon fontSize="large" color="primary" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className={classes.icon}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: '800' }}>
              {contactoInfo.instagram}
            </Typography>
          </a>
          <a href="https://es-la.facebook.com" target="_blank" rel="noreferrer">
            <FacebookIcon color="secondary" fontSize="large" />
          </a>
          <a
            href="https://es-la.facebook.com"
            target="_blank"
            rel="noreferrer"
            className={classes.icon}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: '800' }}>
              {contactoInfo.facebook}
            </Typography>
          </a>
        </div>
        <Typography variant="h6" className={classes.subtitle}>
          Llamanos de lunes a viernes de 8:00 a 18:00 al:
        </Typography>
        <Typography
          variant="h6"
          className={classes.mail}
          sx={{ fontWeight: '800' }}
        >
          {contactoInfo.teléfono}
        </Typography>
      </Container>
      <DecorativeLine />
    </>
  )
}
export default Contacto
