import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button, TextField, Typography } from '@mui/material'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import useStyles from './StyleContactForm'
import { postContacts } from '../../Services/ContactApiService'
import { Modal } from '../../Utils/AlertsProps'
import { AlertSucces } from '../../Utils/AlertSucces'

const validationSchema = yup.object({
  email: yup
    .string('Ingrese su e-mail')
    .email('Ingrese un e-mail valido')
    .required('Es necesario ingresar un e-mail'),

  name: yup
    .string('Ingrese su nombre')
    .required('El nombre es requerido')
    .matches(/[a-zA-Z]/, 'El nombre solo puede contener letras'),
  phone: yup
    .string('Ingrese su telefono')
    .min(8, 'El telefono debe tener al menos 8 digitos')
    .required('Es necesario ingresar un numero de telefono')
    .matches(/(?=.*[0-9])/, 'El telefono solo puede contener numeros'),
  message: yup
    .string('Ingrese su mensaje')
    .required('Debe de escribir un mensaje'),
})

const ContactForm = () => {
  const classes = useStyles()

  const { handleSubmit, touched, errors, values, handleChange } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postContacts(values)
        AlertSucces(values)
        return response.data
      } catch (error) {
        return error.response
      }
    },
  })

  return (
    <div className={classes.containerForm}>
      <Typography variant="h6">Dejanos aquí tu mensaje.</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Nombre"
          className={classes.fieldForm}
          value={values.name}
          onChange={handleChange}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          className={classes.fieldForm}
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Telefono"
          className={classes.fieldForm}
          value={values.phone}
          onChange={handleChange}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
        />
        <TextareaAutosize
          id="message"
          name="message"
          maxRows={4}
          aria-label="maximum height"
          placeholder="Ingrese su mensaje"
          className={classes.txt}
          value={values.message}
          onChange={handleChange}
        />
        <Typography
          className={classes.typographyTextArea}
          variant="caption"
          color="error"
        >
          {touched.message && errors.message}
        </Typography>
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
