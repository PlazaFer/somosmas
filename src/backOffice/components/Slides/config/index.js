import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup
      .string('Ingrese su nombre')
      .min(4, 'El nombre debe tener al menos 4 caracteres')
      .required('Es necesario ingresar un nombre')
      .matches(/[a-zA-Z]/, 'El nombre solo puede tener letras'),
    description: Yup
    .string('Ingrese Una descripcion')
    .required('Es necesario ingresar una descripcion'),
    order: Yup
        .string('Ingrese orden')
        .required('Es necesario ingresar un order')
        .matches(/(?=.*[0-9])/, 'Solo puede ingresar numeros'),
    image: Yup
        .mixed()
        // .test(
        //     "type",
        //     "Solo imagenes png y jpg",

				//     (value) =>{
				//         return value && (["image/jpg"].includes(value.type) || ["image/png"].includes(value.type))}
				//     )
        .required('Es necesario ingresar una imagen'),
    
  });