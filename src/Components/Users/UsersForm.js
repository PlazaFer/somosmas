import React from 'react';
import { useFormik} from 'formik';
import { validationSchema } from './config/index';
import { convertToBase64 } from '../../helpers/base64'
import {Button , TextField, Autocomplete, Typography } from '@mui/material';
import useStyles from './style';
import { privatePATCH, privatePOST} from '../../Services/privateApiService';
import { putUser,postUser } from '../../Services/userServices';

const UserForm = ({ data }) => {
    const classes = useStyles()
    const options = ["", "Administrador", "Regular"]
 
    const initialValues = {
        name: data?.name || '',
        email: data?.email || '',
        role_id: data?.role_id || '',
        password: data?.password || '',
        profile_image: data?.profile_image || ''
    };

    const { handleSubmit, handleChange, handleBlur, touched, errors, setFieldValue, values } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: ( async (values) => {
            if (data) {
                const base64 = await convertToBase64(values.profile_image)
                values.profile_image = base64
                putUser('https://ongapi.alkemy.org/api/users', data.id, values)
            }
            else {
                const base64 = await convertToBase64(values.profile_image)
                values.profile_image = base64
                postUser('https://ongapi.alkemy.org/api/users', values);
            }
        })
    })


    return (
        <div className={classes.containerForm}>
            <Typography variant='h6'>Registrate</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    name="name"
                    label="Nombre"
                    className={classes.fieldForm}
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
                    className={classes.fieldForm}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    color="secondary"
                />
                <TextField className={classes.fieldForm}
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
                <Autocomplete
                    id="role_id"
                    name="role_id"
                    className={classes.txt}
                    value={values.role_id}
                    options={options}
                    onChange={(e, value) => setFieldValue("role_id", value)}
                    renderInput={(params) => <TextField {...params} label="Elija una opcion" error={touched.role_id && Boolean(errors.role_id)} helperText={touched.role_id && errors.role_id}/>}
                />
                <TextField className={classes.fieldForm}
                    fullWidth
                    name="profile_image"
                    type="file"
                    onBlur={handleBlur}
                    onChange={(e)=>setFieldValue("profile_image", e.target.files[0])}
                    error={touched.profile_image && Boolean(errors.profile_image)}
                    helperText={touched.profile_image && errors.profile_image}
                />

                <Button color="secondary" variant="contained" fullWidth type="submit">
                    Enviar
                </Button>
            </form>
        </div>
    );
}
 
export default UserForm;