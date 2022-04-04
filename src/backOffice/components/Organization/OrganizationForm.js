import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  getOrganizationByID,
  putOrganization,
} from "../../../redux/Organization/organizationSlice";
import { convertToBase64 } from "../../../helpers/base64";
import { Button, TextField, Typography, Container, Paper } from "@mui/material";
import Spinner from "../../../shared/Spinner/Spinner";
import Editor from "../Editor/Editor";
import { useStyles } from "./styles/organizationFormStyles";
import { sweetAlertMixin } from "../../../Utils/AlertState";

const OrganizationForm = () => {
  const history = useHistory();
  const { state } = useLocation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { organizationID, status } = useSelector((state) => state.organization);

  useEffect(() => {
    dispatch(getOrganizationByID(state));
  }, [dispatch]);

  const isValidUrl = (url) => {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  };

  const organizationSchema = yup.object().shape({
    name: yup.string().required("El campo es obligatorio"),
    long_description: yup.string().required("El campo es obligatorio"),
    linkedin_url: yup
      .string()
      .required("El campo es obligatorio")
      .test("type", "La url no es valida", (value) => isValidUrl(value)),
    logo: yup
      .mixed()
      .required("La imagen es obligatorio")
      .test("type", "Solo imagenes png y jpg", (value) => {
        return (
          value &&
          (["image/jpg"].includes(value.type) ||
            ["image/png"].includes(value.type))
        );
      }),
    short_description: yup.string().required("El campo es obligatorio"),
  });

  const { handleSubmit, touched, errors, setFieldValue, values, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        name: organizationID?.name || "",
        logo: organizationID?.logo || "",
        short_description: organizationID?.short_description || "",
        long_description: organizationID?.long_description || "",
        linkedin_url: organizationID?.linkedin_url || "",
      },
      validationSchema: organizationSchema,
      onSubmit: async (values) => {
        const base64 = await convertToBase64(values.logo);
        values.logo = base64;
        values.id = organizationID.id;
        dispatch(putOrganization(values))
      },
    });

    useEffect(() => {
      if(status === 'edited'){
        sweetAlertMixin('success', 'Se edito exitosamente')
      }
    }, [status])

  return (
    <Container className={classes.container}>
      <form className={classes.containerForm} onSubmit={handleSubmit}>
        <Paper elevation={5} className={classes.paper}>
          <Typography className={classes.title} variant="h5">
            Editar Organizacion
          </Typography>
          <TextField
            label="Nombre"
            className={classes.inputs}
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
            value={values.name}
          />

          <TextField
            className={classes.inputs}
            type="file"
            name="logo"
            fullWidth
            onChange={(e) => setFieldValue("logo", e.target.files[0])}
            onBlur={handleBlur}
            error={touched.logo && Boolean(errors.logo)}
            helperText={touched.logo && errors.logo}
          />

          <TextField
            label="Descripción"
            className={classes.inputs}
            type="text"
            name="long_description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.long_description}
            fullWidth
            error={touched.long_description && Boolean(errors.long_description)}
            helperText={touched.long_description && errors.long_description}
          />
          <Editor
            text={values.short_description}
            onChangeText={(short_description) => {
              setFieldValue("short_description", short_description);
            }}
          />
          {handleSubmit && errors.short_description && (
            <Typography
              sx={{ paddingLeft: "11px" }}
              variant="caption"
              color="error"
            >
              {touched.short_description && errors.short_description
                ? errors.short_description
                : null}
            </Typography>
          )}

          <TextField
            label="Linkedin"
            className={classes.inputs}
            type="text"
            name="linkedin_url"
            value={values.linkedin_url}
            onBlur={handleBlur}
            fullWidth
            onChange={handleChange}
            error={touched.linkedin_url && Boolean(errors.linkedin_url)}
            helperText={touched.linkedin_url && errors.linkedin_url}
          />

          <Button
            color="secondary"
            disabled={status == "loading" ? true : false}
            variant="contained"
            fullWidth
            type="submit"
            className={classes.button}
          >
            {status == "loading" ? (
              <Spinner width={30} height={30} color="#000" />
            ) : (
              "Editar"
            )}
          </Button>
        </Paper>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.replace('/backoffice/organization')}
          className={classes.buttonBack}
        >
          Volver
        </Button>
      </form>
    </Container>
  );
};

export default OrganizationForm;
