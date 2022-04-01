import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { enviarDonacion } from './enviarDonacion';
import { sweetAlertMixin } from '../../Utils/AlertState';
import { Box, Button, Typography } from '@mui/material';
import useStyles from './styles/donancionStyles';
import { useFormik } from 'formik';
import { TextField, Tooltip, InputAdornment } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';


const Donacion = () => {

    const { isLogin } = useSelector((state) => state.auth);
    const classes = useStyles();

    const {handleChange, handleSubmit, handleBlur, values, touched, errors} = useFormik({
        enableReinitialize: true,
        initialValues: {
            ammount: ''
        },
        validationSchema: Yup.object({
            ammount: Yup.number()
            .min(2, 'Debe ser mayor a $1')
            .required('El campo es obligatorio'),
        }),
        onSubmit: async (values, {setSubmitting}) => {
            if(isLogin){
                setTimeout(() => {
                enviarDonacion(values);
                setSubmitting(false);
            }, 400);
            }else{
                sweetAlertMixin('error', 'Debes estar logueado para donar')
            }
        },
    });

    return(
        <Box className={classes.container}>
        <Typography variant='h4'>¡Doná!</Typography>
            <form 
              onSubmit={handleSubmit}
              className={classes.formulario}
            >
            <TextField 
                name='ammount'
                type='number'
                label="Importe"
                value={values.ammount}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.ammount && Boolean(errors.ammount)}
                helperText={touched.ammount && errors.ammount}
                InputProps={{
                    startAdornment: 
                    <Tooltip title='Debes estar logueado para donar'>
                    <InputAdornment position="start">
                        <InfoIcon color='secondary' />
                    </InputAdornment>
                    </Tooltip>,
                  }}
            />
            <Button 
            type='submit' 
            color='mercadopago' 
            variant='contained' 
            className={classes.buttonDonar}
            >
                Donar
            </Button>
            </form>
        </Box>
    );
};

export default Donacion