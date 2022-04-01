import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    containerForm:{      
        padding: '10px',
        maxWidth: '70%',
        margin: 'auto'
    },
    fieldForm:{
        marginBottom: '10px',
        marginTop: '10px !important',
    },
    fieldFormInput:{
        marginBottom:'20px'
    },
    buttonBack:{
        margin: '15px 0px 0px 15px'
    },
    iconButtonBack:{
        fontSize: 30
    }
}))

export default useStyles;