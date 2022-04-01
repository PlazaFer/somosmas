import * as Yup from 'yup'
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('El campo es obligatorio')
    .min(4, 'Debe tener minimo 4 caracteres'),
  image: Yup.mixed()
    .required('La imagen es obligatorio')
    .test(
      'file size',
      'image',
      (value) => !value || (value && value.size <= 1024 * 1024),
    )
    .test(
      'format',
      'image',
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type)),
    ),

  content: Yup.string().required('El campo es obligatorio'),
})
