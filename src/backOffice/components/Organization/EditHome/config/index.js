import * as Yup from "yup";

export const initialValues = {
    title: "",
    textSlide1: "",
    imageSlide1: "",
    textSlide2: "",
    imageSlide2: "",
    textSlide3: "",
    imageSlide3: "",
  };

  const validationImages = Yup.mixed().required('La imagen debe ser obligatoria').test(
    "type",
    "La imagen debe ser jpg o png",
    (value) => {
      return (
        value &&
        (["image/jpg"].includes(value.type) ||
          ["image/png"].includes(value.type))
      );
    }
  )
  

export const validationSchema = Yup.object({
    title: Yup.string()
      .required("El campo es obligatorio")
      .min(20, "Minimo debe tener 20 caracteres"),
    textSlide1: Yup.string().required("El campo es obligatorio"),
    textSlide2: Yup.string().required("El campo es obligatorio"),
    textSlide3: Yup.string().required("El campo es obligatorio"),
    imageSlide1: validationImages,
    imageSlide2: validationImages,
    imageSlide3: validationImages,
})