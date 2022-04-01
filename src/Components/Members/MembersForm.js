import React, { useEffect } from "react";
import * as Yup from "yup";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getMembersById, putMembers, postMembers} from "../../redux/Members/membersSlice";
import { convertToBase64 } from "../../helpers/base64";
import Editor from "../../backOffice/components/Editor/Editor";
import Spinner from '../../shared/Spinner/Spinner';
import { Button, Container, TextField, Typography, Paper,Box } from "@mui/material";
import useStyles from '../../backOffice/styles/newsFormStyles'
import { sweetAlertMixin } from "../../Utils/AlertState";


const MembersForm = () => {
  const dispatch = useDispatch();
  const { memberId, status } = useSelector((state) => state.members);
  const { state } = useLocation();
  const history = useHistory();
  const classes = useStyles();


  useEffect(() => {
    if (state) {
      dispatch(getMembersById(state));
    }
  }, []);

  const isValidUrl = (url) => {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("El campo es obligatorio")
      .min(4, "Debe tener minimo 4 caracteres"),
    image: Yup.mixed()
      .required("La imagen es obligatorio")
      .test("type", "Solo imagenes png y jpg", (value) => {
        return (
          value &&
          (["image/jpg"].includes(value.type) ||
            ["image/png"].includes(value.type))
        );
      }),
    description: Yup.string().required("El campo es obligatorio"),
    linkedinUrl: Yup.string()
      .required("El campo es obligatorio")
      .test("type", "La url no es valida", (value) => isValidUrl(value)),
      facebookUrl: Yup.string()
      .required("El campo es obligatorio")
      .test("type", "La url no es valida", (value) => isValidUrl(value)),
  });


  const imageExample = "https://www.w3schools.com/howto/img_avatar.png";

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    handleReset,
    touched,
    errors,
    setFieldValue,
    values,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: memberId?.name || "",
      linkedinUrl: memberId?.linkedinUrl || "",
      facebookUrl: memberId?.facebookUrl || "",
      description: memberId?.description || "",
      image: memberId?.image || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (memberId) {
          const base64 = await convertToBase64(values.image)
          values.image = base64
          values.id = memberId.id
          dispatch(putMembers(values));
      }
      else {
          const base64 = await convertToBase64(values.image)
          values.image = base64
          dispatch(postMembers(values));
      }
    },
  });

  useEffect(() => {
    if(status == 'created'){
      sweetAlertMixin('success', 'Se creo correctamente')
        handleReset();
    }
}, [status])

useEffect(() => {
    if(status == 'edited'){
      sweetAlertMixin('success', 'Se modifico correctamente')
        history.push('/backoffice/members')
    }
}, [status])


  return (
  <Container className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Paper className={classes.paper} elevation={5}>
          <Typography className={classes.title} variant="h5">
            {memberId ? 'Editar Miembro' : 'Crear Miembro'}
          </Typography>
          <TextField
            fullWidth
            name="name"
            label="Nombre"
            type="text"
            value={values.name}
            className={classes.inputs}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            fullWidth
            name="linkedinUrl"
            label="Instagram"
            type="text"
            value={values.linkedinUrl}
            className={classes.inputs}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.linkedinUrl && Boolean(errors.linkedinUrl)}
            helperText={touched.linkedinUrl && errors.linkedinUrl}
          />
          <TextField
            fullWidth
            name="facebookUrl"
            label="Twitter"
            type="text"
            className={classes.inputs}
            style={{ gridArea: "twitter" }}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.facebookUrl && Boolean(errors.facebookUrl)}
            helperText={touched.facebookUrl && errors.facebookUrl}
          />
          <div
            className={classes.inputs}
          >
            <Editor
              text={values.description}
              onChangeText={(description) => {
                setFieldValue("description", description);
              }}
            />
            {handleSubmit && errors.description && (
              <Typography
                className={classes.errorCkEditor}
                variant="caption"
                color="error"
              >
                {touched.description && errors.description}
              </Typography>
            )}
          </div>
          <TextField
            type="file"
            name="image"
            onChange={(e) => setFieldValue("image", e.target.files[0])}
            fullWidth
            onBlur={handleBlur}
            style={{ gridArea: "imageInput" }}
            className={classes.inputs}
            error={touched.image && Boolean(errors.image)}
            helperText={touched.image && errors.image}
          />
          <img
            src={memberId ? memberId.image : imageExample}
            alt="profile images"
            className={classes.img}
          />
          <Button
            type="submit"
            className={classes.button}
            color="secondary"
            variant="contained"
            fullWidth
            disabled={status === 'loading'}
          >
            {status === 'loading' ? <Spinner width={30} height={30} color='#FFF'/> : 'Enviar'}
          </Button>
        </Paper>
        <Box className={classes.finalLink}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.goBack()}
          >
            Volver a la lista
          </Button>
        </Box>
      </form>
    </Container>
  );
};
export default MembersForm;
