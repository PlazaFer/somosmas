import React, { useState, useEffect } from "react";
import useStyles from "../../styles/TestimonialsFormStyles";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import Editor from "../Editor/Editor";
import * as Yup from "yup";
import { privatePOST, privatePATCH } from "../../../Services/privateApiService";
import { convertToBase64 } from '../../../helpers/base64'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllTestimonials, selectTestimonialsStatus, getTestimonialsById, putTestimonials, postTestimonials, deleteTestimonials } from '../../../redux/Testimonials/testimonialsSlice'

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
	const { id } = useParams()
    const { pathname } = useLocation()    
    const dispatch = useDispatch()
	const testimonials = useSelector(selectAllTestimonials)
    const testimonialsStatus = useSelector(selectTestimonialsStatus)

	useEffect(() => {
        if(pathname.includes('edit') && testimonialsStatus !== 'updated'){
            dispatch(getTestimonialsById(id))
        }
    }, [testimonials, testimonialsStatus, dispatch]);

	const { setFieldValue, handleSubmit, values, handleChange, touched, errors } = useFormik({
        enableReinitialize: true,
		initialValues: {
			name: testimonials?.name || "",
			description: testimonials?.description ||"",
			image: testimonials?.image || "",
		},
		validationSchema: validationSchema,
		onSubmit: ( async (values) => {
            if (testimonial) {
                privatePATCH(`${process.env.REACT_APP_API_GET_TESTIMONIALS}/${testimonial.id}`, values);
            }
            privatePOST(process.env.REACT_APP_API_GET_TESTIMONIALS, values);

			if (pathname.includes('edit')) {
                const base64 = await convertToBase64(values.image)
                values.image = base64
                console.log(values)
                console.log(testimonials)
                values.id = testimonials.id
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
			{touched.image && !isValidImageFormat? (
				<div>El formato de la imágen no es válido {errors.image}</div>
			) : null}
			<Button color='secondary' className={classes.formElement} type="submit" variant="contained">
				Enviar
			</Button>
		</form>
	);
};

export default TestimonialForm;
