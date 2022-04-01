import React, { useState } from "react";
/* import "../FormStyles.css"; */
import { privatePOST, privatePATCH } from "../../../Services/privateApiService";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { Container, Button, Typography } from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup'
import { convertToBase64 } from "../../../helpers/base64";
import useStyles from "../../../Components/Auth/AuthStyles";


const validationSchema = yup.object({
  title: yup
    .string('Ingrese un título')
    .required('El titulo es obligarotio'),
  description: yup
    .string('Ingrese una desripción')
    .required('La descripción es obligatoria'),
  image: yup
    .mixed()
    .test(
      "type",
      "Solo imagenes png y jpg",
      (value) => {
        return value && (["image/jpg"].includes(value.type) || ["image/png"].includes(value.type))
      })

});


const ProjectsForm = ({ data }) => {
  const classes = useStyles()
  const [projectData, setProjectData] = useState({ due_date: '' });

  const { handleSubmit, handleChange, handleBlur, touched, errors, setFieldValue, values } = useFormik({
    initialValues: {
      title: data?.title || '',
      description: data?.description || '',
      image: data?.image || ''
    },
    validationSchema: validationSchema,
    onSubmit: (async (values) => {
      setProjectData(
        Object.assign(projectData, values))
      if (data) {
        const base64 = await convertToBase64(projectData.image)
        projectData.image = base64
        privatePATCH(`https://ongapi.alkemy.org/api/projects/${data.id}`, projectData)
      } else {
        const base64 = await convertToBase64(projectData.image)
        projectData.image = base64
        privatePOST("http://ongapi.alkemy.org/api/projects", projectData);
      }

      console.log(projectData)
    }),
  });

  return (
    <Container className={classes.containerForm}>
      <Typography>Completá los datos del proyecto</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.fieldForm}
          fullWidth
          id="title"
          name="title"
          label="Título"
          value={values.title}
          onChange={handleChange}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
          color="secondary"
        />
        <TextField
          className={classes.fieldForm}
          fullWidth
          id="description"
          name="description"
          label="Descripción"
          type="text"
          value={values.description}
          onChange={handleChange}
          error={touched.desription && Boolean(errors.description)}
          helperText={touched.description && errors.description}
          color="secondary"
        />

        <TextField className={classes.fieldFormInput}
          fullWidth
          id="image"
          type="file"
          name="image"
          onChange={(e) => setFieldValue("image", e.target.files[0])}
          error={touched.image && Boolean(errors.image)}
          helperText={touched.image && errors.image} />



        <Typography></Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            className={classes.fieldForm}
            label="Fecha de finalización"
            value={projectData.due_date || new Date()}
            minDate={new Date()}
            onChange={(newValue) => {
              setProjectData({ ...projectData, due_date: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button className={classes.fieldForm} color="secondary" variant="contained" fullWidth type="submit" >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ProjectsForm;