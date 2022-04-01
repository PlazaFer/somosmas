import React, { useState } from "react";
import * as Yup from "yup";
import { Typography, TextField, Button } from "@mui/material";
import { FormHelperText } from '@mui/material';
import { Box } from "@mui/system";
import useStyles from "./styles/Newsletter";
import { useFormik } from "formik";
import useLocalStorage from "../../hooks/useLocalStorage";
import { sweetAlertMixin } from "../../Utils/AlertState";

export default function Newsletter() {
  const classes = useStyles();
  const [item, setItem] = useLocalStorage("email", "");
  const [suscribed, setSuscribed] = useState(false);

  const { handleSubmit, handleChange, values, errors, handleReset } = useFormik(
    {
      initialValues: {
        email: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required("El campo es obligatorio")
          .email("Ingresa un email valido"),
      }),
      onSubmit: (values) => {
        setItem(values.email);
        setSuscribed(true);
        sweetAlertMixin("success", "Ya estas suscripto a nuestro boletin");
        handleReset();
      },
    }
  );

  return (
    <Box className={classes.newsletterContainer}>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <Box className={classes.textContainer}>
        <Typography variante="p" component="p" className={classes.text}>
          Suscríbete a nuestro boletín
        </Typography>
      </Box>
	  <Box className={classes.inputContainer}>
        <TextField
          variant="outlined"
          size="small"
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          error={errors.email}
          value={values.email}
          sx={{ backgroundColor: "#fff" }}
        />
		<FormHelperText className={classes.inputError}>{errors.email && errors.email}</FormHelperText>
		</Box>
        <Box>
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </Box>
      </form>
    </Box>
  );
}
