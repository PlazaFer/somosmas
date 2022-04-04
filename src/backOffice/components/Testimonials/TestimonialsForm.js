import React, { useState, useEffect } from "react";
import useStyles from "../../styles/TestimonialsFormStyles";
import { TextField, Button, Box } from "@mui/material";
import { useFormik } from "formik";
import Editor from "../Editor/Editor";
import * as Yup from "yup";
import { convertToBase64 } from '../../../helpers/base64'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTestimonialsById, putTestimonials, postTestimonials } from "../../../redux/Testimonials/testimonialsSlice";
import { sweetAlertMixin } from "../../../Utils/AlertState";
import Spinner from "../../../shared/Spinner/Spinner";

const validationSchema = Yup.object({
	name: Yup.string("Ingrese su nombre")
		.min(4, "El nombre debe tener al menos 4 caracteres")
		.required("Es necesario ingresar un nombre"),
	description: Yup.string("Ingrese Una descripcion").required(
		"Es necesario ingresar una descripción"
	),
	image: Yup.mixed().nullable().required("La imágen es obligatoria"),
});

const TestimonialForm = ({ testimonial }) => {
	const classes = useStyles();
	const { state } = useLocation()
	const dispatch = useDispatch()
	const { testimonialsId, status } = useSelector(state => state.testimonials)
	const history = useHistory()

	useEffect(() => {
		if (state) {
			dispatch(getTestimonialsById(state.id))
		}
	}, []);

	const { setFieldValue, handleSubmit, values, handleChange, touched, errors, handleReset } = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: testimonialsId?.name || "",
			description: testimonialsId?.description || "",
			image: testimonialsId?.image || "",
		},
		validationSchema: validationSchema,
		onSubmit: (async (values) => {
			if (testimonialsId?.id) {
				const base64 = await convertToBase64(values.image)
				values.image = base64
				values.id = testimonialsId.id
				dispatch(putTestimonials(values))
			}
			else {
				const base64 = await convertToBase64(values.image)
				values.image = base64
				dispatch(postTestimonials(values))
			}

		})
	});

	const [isValidImageFormat, setIsValidImageFormat] = useState(false);

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

	useEffect(() => {
		if (status === "created") {
			sweetAlertMixin("success", "Se creo correctamente")
			handleReset()
		}
	}, [status])

	useEffect(() => {
		if (status === "edited") {
			sweetAlertMixin("success", "Se modifico correctamente")
			history.push("/backoffice/testimonials");
		}
	}, [status])

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<TextField
				className={classes.formElement}
				name="name"
				value={values.name}
				onChange={handleChange}
				placeholder="Testimonial Title"
				error={touched.name && errors.name}
			/>
			<Editor
				text={values.description}
				onChangeText={(data) => {
					setFieldValue("description", data);
				}}
			/>
			{touched.description && errors.description ? (
				<div>{errors.description}</div>
			) : null}
			<TextField
				inputProps={{
					accept: "image/png, image/jpeg",
					type: "file",
				}}
				name="defaultImage"
				className={classes.formElement}
				onChange={(event) => handleImageChange(event)}
			/>
			{touched.image && !isValidImageFormat ? (
				<div>El formato de la imágen no es válido {errors.image}</div>
			) : null}
			<Button
				color="secondary"
				disabled={status === 'loading' ? true : false}
				variant="contained"
				fullWidth
				type="submit"
				className={classes.button}
			>
				{status === 'loading' ? (
					<Spinner width={30} height={30} color="#000" />
				) : (
					'Enviar'
				)}
			</Button>
			<Box>
				<Button
					className={classes.finalLink}
					variant="contained"
					color="secondary"
					onClick={() => history.push("/backoffice/testimonials")}
				>
					Volver a la lista
				</Button>
			</Box>
		</form>
	);
};

export default TestimonialForm;
