import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import useStyles from "../../../Components/Auth/AuthStyles"
import * as yup from "yup";
import Editor from '../Editor/Editor';
import { useFormik } from 'formik';

const OrganizationForm = () => {
    const classes = useStyles();

    const isValidUrl = (url) => {
        try {
            new URL(url);
        } catch (e) {
            return false;
        }
        return true;
    };

    const organizationSchema = yup.object().shape({

        name: yup.string()

            .required('El campo es obligatorio'),

        longDescription: yup.string()

            .required('El campo es obligatorio'),

        redSocial: yup.string()
            .required("El campo es obligatorio")
            .test("type","La url no es valida",  (value) => isValidUrl(value))
        ,

        image: yup
            .mixed()
            .required("La imagen es obligatorio")
            .test(
                "type",
                "Solo imagenes png y jpg",
                (value) => {
                    return value && (["image/jpg"].includes(value.type) || ["image/png"].includes(value.type))
                }
            ),
            description: yup.string()
            .required("El campo es obligatorio")
    })
    
    const { handleSubmit, touched, errors, setFieldValue, values, handleChange } = useFormik({
        initialValues: {
            name: "",
            image: "",
            shortDescription: "",
            longDescription: "",
            redSocial: "",
        },
        validationSchema: organizationSchema,
        onSubmit: (values) => {

        }
    });

    return (
        <form className={classes.containerForm} onSubmit={handleSubmit}>
            <TextField
                label="Nombre"
                className={classes.fieldForm}
                type="text"
                name='name'
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
                value={values.name}
            />

            <TextField
                className={classes.fieldForm}
                type="file"
                name="image"
                fullWidth
                onChange={(e) => setFieldValue("image", e.target.files[0])}
                error={touched.image && Boolean(errors.image)}
                helperText={touched.image && errors.image}
            />

            <Editor text={values.shortDescription} onChangeText={(shortDescription) => {
                setFieldValue("shortDescription", shortDescription)
            }} />
            {handleSubmit && errors.description &&
                <Typography sx={{ paddingLeft: "11px" }} variant="caption" color="error">{touched.description && errors.description ? errors.description : null}</Typography>
            }

            <TextField
                label="Descripción"
                className={classes.fieldForm}
                type="text"
                name="longDescription "
                onChange={handleChange}
                fullWidth
                error={touched.longDescription && Boolean(errors.longDescription)}
                helperText={touched.longDescription && errors.longDescription}
            />
            <TextField
                label="Red social"
                className={classes.fieldForm}
                type="text"
                name="redSocial"
                fullWidth
                onChange={handleChange}
                error={touched.redSocial && Boolean(errors.redSocial)}
                helperText={touched.redSocial && errors.redSocial}
            />

            <Button color="secondary" variant="contained" fullWidth type="submit">Enviar</Button>

        </form>
    )
}

export default OrganizationForm