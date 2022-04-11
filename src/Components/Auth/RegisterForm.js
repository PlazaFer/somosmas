import React, { useEffect, useState } from 'react';
/* import '../FormStyles.css'; */
import useStyles from './AuthStyles';
import { Formik, Field, Form } from 'formik';
import { SignupSchema } from './SignupSchema';
import {
  Alert,
  Button,
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Toolbar,
} from '@mui/material';
import { AlertSucces } from '../../Utils/AlertSucces'
import { useDispatch } from 'react-redux';
import { registarUsuario } from "../../redux/usersReducer/action"
import { useSelector } from 'react-redux';
import Spinner from '../../shared/Spinner/Spinner'

const RegisterForm = () => {
  const { loading } = useSelector(state => state.auth)
  const classes = useStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);

  const userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const { firstName, email, password } = values
    dispatch(registarUsuario(firstName, email, password))
    AlertSucces(values, setSubmitting)
    setOpen(true);

  };


  const showAlert = (type, text) => {
    return <Alert severity={type}>{text}</Alert>;
  };

  return (
    <>
      <Toolbar></Toolbar>
      <Container className={classes.containerForm}>
        <Formik
          initialValues={userData}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Paper elevation={3} className={classes.paper}>
              <Form>
                <Typography className={classes.titleForm} variant="h5">Register</Typography>
                <label htmlFor="firstName">Primer nombre</label>
                <TextField
                  className={classes.fieldForm}
                  fullWidth
                  id="firstName"
                  name="firstName"
                  placeholder="Primer nombre"
                />
                {errors.firstName && touched.firstName
                  ? showAlert('warning', errors.firstName)
                  : null}
                <label htmlFor="lastName">Segundo nombre</label>
                <TextField
                  className={classes.fieldForm}
                  fullWidth
                  id="lastName"
                  name="lastName"
                  placeholder="Segundo nombre"
                />
                {errors.lastName && touched.lastName
                  ? showAlert('warning', errors.lastName)
                  : null}
                <label htmlFor="email">Email</label>
                <TextField
                  className={classes.fieldForm}
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  type="email"
                />
                {errors.email && touched.email
                  ? showAlert('warning', errors.email)
                  : null}
                <label htmlFor="password">Contraseña</label>
                <TextField
                  className={classes.fieldForm}
                  fullWidth
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                />
                {errors.password && touched.password
                  ? showAlert('warning', errors.password)
                  : null}
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <TextField
                  className={classes.fieldForm}
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirmar contraseña"
                  type="password"
                />
                {errors.confirmPassword && touched.confirmPassword
                  ? showAlert('warning', errors.confirmPassword)
                  : null}
                {loading ? <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Spinner width={30} heigth={30} color="#000" />
                </Box> :
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button disabled={!errors} color="secondary" variant="contained" type="submit" className={classes.buttonContacto}>
                      Registrarse
                    </Button>
                  </Box>
                }
              </Form>
            </Paper>
          )}
        </Formik>
      </Container>
    </>

  );
};

export default RegisterForm;