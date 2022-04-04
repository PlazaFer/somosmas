import React from 'react'
import { Container } from '@mui/material'
import DecorativeLine from './../DecorativeLine/DecorativeLine'
import ContactForm from '../ContactForm/ContactForm'
import useStyles from './contactoStyles'


const Contacto = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container}>
        <ContactForm />
      </Container>
    </>
  )
}
export default Contacto
