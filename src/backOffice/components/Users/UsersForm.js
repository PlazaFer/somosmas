import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useLocation, useHistory } from 'react-router-dom';
import { postUser, putUser } from '../../../redux/Users/userSlice';
import { convertToBase64 } from '../../../helpers/base64';
import { getUsersById } from '../../../redux/Users/userSlice';
import { Button, TextField, Typography, Select, MenuItem, InputLabel, FormControl, FormHelperText, Container, Paper, Box } from '@mui/material';
import Spinner from '../../../shared/Spinner/Spinner';
import useStyles from '../../styles/newsFormStyles'
import { sweetAlertMixin } from '../../../Utils/AlertState';

const validationSchema = yup.object({
    email: yup
        .string('Ingrese su mail')
        .email('Ingrese una dirección de mail válida')
        .required('Es necesario ingresar una dirección de mail'),
    name: yup
        .string('Ingrese su nombre')
        .min(4, 'El nombre debe tener al menos 4 caracteres')
        .required('Es necesario ingresar un nombre')
        .matches(/[a-zA-Z]/, 'El nombre solo puede tener letras'),
    role_id: yup
        .string('Selecione un rol')
        .required('Elija una opción'),
    password: yup
        .string('Ingrese su contraseña')
        .min(8, 'La contraseña debe tener una longitud mínima de 8 caraceteres.')
        .required('Es necesario ingresar una contraseña'),
    profile_image: yup
        .mixed()
        .test(
            "type",
            "Solo imagenes png y jpg",
            (value) => {
                return value && (["image/jpg"].includes(value.type) || ["image/png"].includes(value.type))
            }
        )
        .required('Es necesario ingresar una imagen'),
});

const UserForm = () => {

    const { userId, status } = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const { state } = useLocation()
    const history = useHistory();

    const classes = useStyles()

    useEffect(() => {
        if (state) {
            dispatch(getUsersById(state))
        }
    }, [])

    useEffect(() => {
    }, [userId])


    const { handleChange, handleSubmit, handleReset, handleBlur, values, setFieldValue, touched, errors } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: userId?.name || '',
            email: userId?.email || '',
            role_id: userId?.role_id || '',
            password: userId?.password || '',
            profile_image: userId?.profile_image || ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (userId) {
                const base64 = await convertToBase64(values.profile_image)
                values.profile_image = base64
                values.id = userId.id
                dispatch(putUser(values))
            } else {
                const base64 = await convertToBase64(values.profile_image)
                values.profile_image = base64
                dispatch(postUser(values))
            }
        },
    });

    useEffect(() => {
        if (status == 'created') {
            sweetAlertMixin('success', 'Se creo correctamente')
            handleReset();
        }
    }, [status])

    useEffect(() => {
        if (status == 'edited') {
            sweetAlertMixin('success', 'Se modifico correctamente')
            history.push('/backoffice/users')
        }
    }, [status])

    return (
        <Container className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Paper className={classes.paper} elevation={5}>
                    <Typography className={classes.title} variant="h5">{userId ? 'Editar Usuario' : 'Crear Usuario'}</Typography>
                    <TextField
                        fullWidth
                        name="name"
                        label="Nombre"
                        className={classes.inputs}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                        color="secondary"
                    />
                    <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        className={classes.inputs}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        color="secondary"
                    />
                    <TextField className={classes.inputs}
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        color="secondary"
                    />
                    <FormControl
                        fullWidth
                        error={touched.role_id && Boolean(errors.role_id)}
                        className={classes.txt}
                    >
                        <InputLabel id='role_id'>Rol</InputLabel>
                        <Select
                            id='role_id'
                            labelId='role_id'
                            name='role_id'
                            value={values.role_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <MenuItem value='' disabled>--Seleccione una opcion--</MenuItem>
                            <MenuItem value={1}>Administrador</MenuItem>
                            <MenuItem value={2}>Regular</MenuItem>
                        </Select>
                        {errors.role_id && <FormHelperText>{errors.role_id}</FormHelperText>}
                    </FormControl>

                    <TextField className={classes.inputs}
                        fullWidth
                        name="profile_image"
                        type="file"
                        onBlur={handleBlur}
                        onChange={(e) => setFieldValue("profile_image", e.target.files[0])}
                        error={touched.profile_image && Boolean(errors.profile_image)}
                        helperText={touched.profile_image && errors.profile_image} />

                    <Button color="secondary" disabled={status == 'loading' ? true : false} variant="contained" fullWidth type="submit" className={classes.button}>
                        {status == 'loading'
                            ? <Spinner width={30} height={30} color='#000' />
                            : 'Enviar'
                        }
                    </Button>
                </Paper>
                <Box className={classes.finalLink}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => history.goBack()}
                    >
                        Volver a la lista
                    </Button>
                </Box>
            </form>
        </Container>
    );
}

export default UserForm;