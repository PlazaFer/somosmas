import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    containerForm: {
        padding: '10px',
        maxWidth: '50%',
        marginBottom: "15px"
    },
    fieldForm: {
        marginBottom: '10px',
        marginTop: '10px !important',
    },
    fieldFormInput: {
        marginBottom: '20px'
    },
    paper: {
        padding: theme.spacing(4)
    },
    buttonContacto: {
        marginTop: theme.spacing(3)
    },
    titleForm: {
        textAlign: 'center',
        fontSize: 18,
        [theme.breakpoints.up('sm')]: {
            fontSize: 30
        }
    },

}))

export default useStyles;