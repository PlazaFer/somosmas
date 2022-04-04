import React, { useEffect, useState } from "react";
import useStyles from '../../styles/newsFormStyles'
import { TextField, Button, Container, Paper, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import Editor from "../Editor/Editor";
import * as Yup from "yup";
import { convertToBase64 } from '../../../helpers/base64';
import { getCategoriesById, postCategory, putCategory } from '../../../redux/Categories/categorySlice'
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../../shared/Spinner/Spinner';
import { sweetAlertMixin } from "../../../Utils/AlertState";




const validationSchema = Yup.object({
	name: Yup.string("Ingrese su nombre")
		.min(4, "El nombre debe tener al menos 4 caracteres")
		.required("Es necesario ingresar un nombre"),
	description: Yup.string("Ingrese Una descripcion").required(
		"Es necesario ingresar una descripción"
	),
	image: Yup.mixed().nullable().required("La imágen es obligatoria"),
});

const CategoriesForm = () => {
	const classes = useStyles();
	const { state } = useLocation();
	const { categoriesById, status } = useSelector(state => state.categories);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (state) {
			dispatch(getCategoriesById(state))
		}

	}, [])

	const { setFieldValue, handleSubmit, handleBlur, values, handleChange, touched, errors, handleReset } = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: categoriesById?.name || "",
			description: categoriesById?.description || "",
			image: categoriesById?.image || "",
		},
		validationSchema: validationSchema,
		onSubmit: (async (values) => {
			if (categoriesById) {
				values.id = categoriesById.id
				dispatch(putCategory(values));
			} else {
				dispatch(postCategory(values));
			}
		})
	});

	const [isValidImageFormat, setIsValidImageFormat] = useState(false);
	useEffect(() => {
		if (status === 'created') {
			sweetAlertMixin('success', 'Creado satisfactoriamente')
			handleReset()
		}
		if (status === 'edited') {
			sweetAlertMixin('success', 'Se modifico correctamente')
			history.push("/backoffice/categories")
		}

	}, [status])

	const handleImageChange = async (event) => {
		const base64String = await convertToBase64(event.target.files[0]);
		setIsValidImageFormat(
			event.target.files[0].type === "image/jpeg" ||
				event.target.files[0].type === "image/jpg" ||
				event.target.files[0].type === "image/png"
				? true
				: false
		);
		setFieldValue("image", base64String);
	};

	return (
		<Container className={classes.container}>
			<form onSubmit={handleSubmit} className={classes.form}>
				<Paper className={classes.paper} elevation={5}>
					<Typography className={classes.title} variant="h5">{categoriesById ? 'Editar Categoria' : 'Crear Categoria'}</Typography>
					<TextField
						className={classes.inputs}
						name="name"
						type="text"
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.name && errors.name}
						helperText={touched.name && errors.name}
						label='Title'
						fullWidth
					/>
					<Editor
						text={values.description}
						onChangeText={(data) => {
							setFieldValue("description", data);
						}}
					/>
					{touched.description && errors.description ? (
						<div className={classes.errorCkEditor}>{errors.description}</div>
					) : null}
					<TextField
						inputProps={{
							accept: "image/png, image/jpeg",
							type: "file",
						}}
						fullWidth
						name="defaultImage"
						className={classes.inputs}
						onChange={(event) => handleImageChange(event)}
					/>
					{touched.image && !isValidImageFormat ? (
						<div>El formato de la imágen no es válido {errors.image}</div>
					) : null}
					<Button color='secondary' className={classes.button} fullWidth type="submit" variant="contained">
						{status === 'loading' ? <Spinner width={30} height={30} color='#FFF' /> : 'Enviar'}
					</Button>
				</Paper>
				<Box className={classes.finalLink}>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => history.push("/backoffice/categories")}
					>
						Volver a la lista
					</Button>
				</Box>
			</form>
		</Container>
	);
};

export default CategoriesForm;