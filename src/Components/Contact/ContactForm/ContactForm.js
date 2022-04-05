import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import Editor from "../../../backOffice/components/Editor/Editor";
import Spinner from "../../../shared/Spinner/Spinner";
import useStyles from "./StyleContactForm";
import { postContacts } from "../../../Services/ContactApiService";
import { sweetAlertMixin } from "../../../Utils/AlertState";

const validationSchema = yup.object({
  email: yup
    .string("Ingrese su e-mail")
    .email("Ingrese un e-mail valido")
    .required("Campo requerido"),

  name: yup
    .string("Ingrese su nombre")
    .required("Campo requerido")
    .matches(/[a-zA-Z]/, "El nombre solo puede contener letras"),
  phone: yup
    .string("Ingrese su telefono")
    .min(8, "El telefono debe tener al menos 8 digitos")
    .required("Campo requerido")
    .matches(/(?=.*[0-9])/, "El telefono solo puede contener numeros"),
  message: yup.string("Ingrese su mensaje").required("Campo requerido"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const {
    handleSubmit,
    touched,
    errors,
    values,
    handleChange,
    setFieldValue,
    handleBlur,
    handleReset,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const response = await postContacts(values);
      if (response.success) {
        sweetAlertMixin(
          "success",
          `Recibimos tu mensaje ${values.name}, Muchas gracias.`
        );
        handleReset();
        setLoading(false);
      } else {
        sweetAlertMixin("error", "Ocurrió un error, intentalo nuevamente.");
        setLoading(false);
      }
    },
  });

  return (
    <Container className={classes.containerForm}>
      <form onSubmit={handleSubmit}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5" className={classes.titleForm}>
            Contactate con nosotros
          </Typography>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Nombre"
            className={classes.fieldForm}
            onBlur={handleBlur}
            value={values.name}
            onChange={handleChange}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            className={classes.fieldForm}
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Telefono"
            className={classes.fieldForm}
            value={values.phone}
            onChange={handleChange}
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
          />
          <Box className={classes.fieldForm}>
            <Editor
              id="message"
              name="message"
              onChangeText={(data) => {
                setFieldValue("message", data);
              }}
              text={values.message}
            />
            {handleSubmit && errors.message && (
              <Typography variant="caption" color="error">
                {touched.message && errors.message}
              </Typography>
            )}
          </Box>

          <Button
            color="secondary"
            className={classes.buttonContacto}
            fullWidth
            type="submit"
            variant="contained"
          >
            {loading ? (
              <Spinner width={30} height={30} color="#FFF" />
            ) : (
              "Enviar"
            )}
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export default ContactForm;
