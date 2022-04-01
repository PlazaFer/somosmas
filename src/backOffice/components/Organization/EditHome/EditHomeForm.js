import React from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./config";
import { Button, Box, Paper, Container, Typography } from "@mui/material";
import Field from "./Field";
import useStyles from "./styles/EditHomeFormStyles";


const EditHomeForm = () => {
  
  const classes = useStyles();

  const { handleSubmit, handleChange, setFieldValue, errors, touched, values } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

    
const props = [
    {
      label: 'Title Home',
      name: 'title',
      onChange: handleChange,
      value: values.title,
      error: touched.title && Boolean(errors.title),
      helperText: touched.title && errors.title,
      className: classes.inputsText
    },
    {
      label: 'Text Slide 1',
      name: 'textSlide1',
      onChange: handleChange,
      value: values.textSlide1,
      error: touched.textSlide1 && Boolean(errors.textSlide1),
      helperText: touched.textSlide1 && errors.textSlide1,
      className: classes.inputsText
    },
    {
    label: "Image Slide 1",
    type: "file",
    name: "imageSlide1",
    error: touched.imageSlide1 && Boolean(errors.imageSlide1),
    helperText: touched.imageSlide1 && errors.imageSlide1,
    onChange: (e) => setFieldValue("imageSlide1", e.target.files[0]),
    className: classes.inputsImage
  },
  {
    label: 'Text Slide 2',
    name: 'textSlide2',
    onChange: handleChange,
    value: values.textSlide2,
    error: touched.textSlide2 && Boolean(errors.textSlide2),
    helperText: touched.textSlide2 && errors.textSlide2,
    className: classes.inputsText
  },
  {
    label: "Image Slide 2",
    type: "file",
    name: "imageSlide2",
    error: touched.imageSlide2 && Boolean(errors.imageSlide2),
    helperText: touched.imageSlide2 && errors.imageSlide2,
    onChange: (e) => setFieldValue("imageSlide2", e.target.files[0]),
    className: classes.inputsImage
  },
  {
    label: 'Text Slide 3',
    name: 'textSlide3',
    onChange: handleChange,
    value: values.textSlide3,
    error: touched.textSlide3 && Boolean(errors.textSlide3),
    helperText: touched.textSlide3 && errors.textSlide3,
    className: classes.inputsText
  },
  {
    label: "Image Slide 3",
    type: "file",
    name: "imageSlide3",
    error: touched.imageSlide3 && Boolean(errors.imageSlide3),
    helperText: touched.imageSlide3 && errors.imageSlide3,
    onChange: (e) => setFieldValue("imageSlide3", e.target.files[0]),
    className: classes.inputsImage
  },
]


  return (
    <Container className={classes.container}>
    <form onSubmit={handleSubmit}>
      <Paper className={classes.paper} elevation={5}>
        <Typography variant="h4">Editar Home</Typography>
        {props.map((element, index) => (
          <Field
            key={index}
            label={element.label}
            type={element.type}
            name={element.name}
            error={element.error}
            helperText={element.helperText}
            onChange={element.onChange}
            value={element.value}
            className={element.className}
          />
        ))}
        <Button variant="contained" color="secondary" type="submit" fullWidth className={classes.button}>
          Enviar
        </Button>
      </Paper>
    </form>
    </Container>
  );
};

export default EditHomeForm;
