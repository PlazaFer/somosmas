import React from 'react'
import { Map } from './Map/Map'
import ContactForm from './ContactForm/ContactForm'
import { Container, Box } from '@mui/material'
import useStyles from './contactoStyles'
import { ViasComunicacion } from './ViasComunicacion/ViasComunicacion'


const Contacto = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container}>
        <ContactForm />
        <Box className={classes.containerMap}>
          <Map />
          <ViasComunicacion />
        </Box>
      </Container>
    </>
  )
}
export default Contacto
