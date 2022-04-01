import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    email: Yup
      .string('Ingrese su mail')
      .email('Ingrese una dirección de mail válida')
      .required('Es necesario ingresar una dirección de mail'),
    name: Yup
      .string('Ingrese su nombre')
      .min(4, 'El nombre debe tener al menos 4 caracteres')
      .required('Es necesario ingresar un nombre')
      .matches(/[a-zA-Z]/, 'El nombre solo puede tener letras'),
    role_id: Yup
        .string('Selecione un rol')
        .required('Elija una opción'),
    password: Yup
        .string('Ingrese su contraseña')
        .min(8, 'La contraseña debe tener una longitud mínima de 8 caraceteres.')
        .required('Es necesario ingresar una contraseña'),
    profile_image: Yup
        .mixed()
        .test(
            "type",
            "Solo imagenes png y jpg",
            (value) =>{
                return value && (["image/jpg"].includes(value.type) || ["image/png"].includes(value.type))}
            )
        .required('Es necesario ingresar una imagen'),
});