import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { validationSchema } from './config';
import { convertToBase64 } from '../../../helpers/base64';
import { TextField, Button, Typography, Paper, Box, Container } from '@mui/material';
import useStyles from '../../styles/newsFormStyles';
import Editor from '../Editor/Editor'
import { useLocation, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSlidesById, postSlides, putSlides } from '../../../redux/slides/slidesSlice'
import { sweetAlertMixin } from '../../../Utils/AlertState';
import Spinner from '../../../shared/Spinner/Spinner';


const SlidesForm = () => {
    const classes = useStyles();
    const { state } = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const { slidesId, status } = useSelector(state => state.slides)

    useEffect(() => {
        if (state) {
            dispatch(getSlidesById(state))
        }
    }, [state])


    const initialValues = {
        name: slidesId?.name || "",
        description: slidesId?.description || "",
        order: slidesId?.order || "",
        image: slidesId?.image || "",
    };

    const { handleSubmit, handleChange, handleBlur, touched, errors, setFieldValue, values, handleReset } = useFormik({
        enableReinitialize: true,
        initialValues: { ...initialValues },
        validationSchema: validationSchema,
        onSubmit: (async (values) => {
            if (slidesId) {
                const base64 = await convertToBase64(values.image)
                values.image = base64
                values.id = slidesId.id
                dispatch(putSlides(values))
            }
            else {
                const base64 = await convertToBase64(values.image)
                values.image = base64
                dispatch(postSlides(values))
            }
        })
    })

    useEffect(() => {
        if (status === "created") {
            sweetAlertMixin("success", "Se creó correctamente");
            handleReset();
        }
    }, [status]);

    useEffect(() => {
        if (status === "edited") {
            sweetAlertMixin('success', 'Se modifico correctamente');
            history.push("/backoffice/slides");
        }
    }, [status]);

    return (
        <Container className={classes.container}>

            <form onSubmit={handleSubmit} className={classes.form}>
                <Paper className={classes.paper} elevation={5}>
                    <Typography className={classes.title} variant="h5">{slidesId ? 'Editar Slide' : 'Crear Slide'}</Typography>
                    <TextField fullWidth
                        className={classes.inputs}
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        value={values.name}
                        onChange={handleChange}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name} />

                    <TextField fullWidth
                        name="order"
                        type="number"
                        className={classes.inputs}
                        value={values.order}
                        onChange={handleChange}
                        placeholder="Order"
                        error={touched.order && Boolean(errors.order)}
                        helperText={touched.order && errors.order} />

                    <TextField fullWidth
                        name="image"
                        type="file"
                        className={classes.inputs}
                        onChange={(e) => setFieldValue("image", e.target.files[0])}
                        error={touched.image && Boolean(errors.image)}
                        helperText={touched.image && errors.image}
                    />
                        <Editor
                            id="description"
                            name="description"
                            onChangeText={(data) => {
                                setFieldValue("description", data);
                            }}
                            text={values.description}

                        />
                        {handleSubmit && errors.description &&
                            <Typography variant="caption" color="error">{touched.description && errors.description}</Typography>
                        }
                    <Button color='secondary' className={classes.button} fullWidth type="submit" variant="contained">
                        {status === 'loading' ? <Spinner width={30} height={30} color='#FFF' /> : 'Enviar'}
                    </Button>
                </Paper>

                <Box className={classes.finalLink}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => history.push("/backoffice/slides")}
                    >
                        Volver a la lista
                    </Button>
                </Box>
            </form>
        </Container>
    );
}
export default SlidesForm;