import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Container, TextField, Typography, Box, Toolbar, Paper } from '@mui/material';
import useStyles from './AuthStyles';
import { useDispatch } from 'react-redux';
import { iniciarSesion } from "../../redux/usersReducer/action"
import { useSelector } from 'react-redux';
import Spinner from "../../shared/Spinner/Spinner"

const validationSchema = yup.object({
  email: yup
    .string('Ingrese su mail')
    .email('Ingrese una dirección de mail válida')
    .required('Es necesario ingresar una dirección de mail'),
  // password: yup
  //   .string('Ingrese su contraseña')
  //   .min(6, 'La contraseña debe tener una longitud mínima de 6 caraceteres.')
  //   .required('Es necesario ingresar una contraseña')
  //   .matches(/[a-zA-Z]+(?=.*[@#$%^&+=])+(?=.*[0-9])/, 'La contraseña debe contener al menos un número, una letra y un símbolo (por ejemplo: @#$%).'),
});

const LoginForm = () => {
  const { loading } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values
      dispatch(iniciarSesion({ email, password }))

    },
  });

  return (
    <>
      <Toolbar></Toolbar>
      <Container className={classes.containerForm}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.titleForm} variant="h5">Completá tus datos para ingresar</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              className={classes.fieldForm}
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              color="secondary"
            />
            <TextField className={classes.fieldForm}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              /* error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password} */
              color="secondary"
            />
            {loading ? <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Spinner width={30} heigth={30} color="#000" />
            </Box> :
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button color="secondary" variant="contained" type="submit" className={classes.buttonContacto}>
                  Iniciar Sesión
                </Button>
              </Box>
            }

          </form>
        </Paper>

      </Container>
    </>

  );
};

export default LoginForm