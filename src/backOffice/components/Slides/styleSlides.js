import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    containerForm: {
        padding: '10px',
        maxWidth: '50%',
        margin: 'auto'
    },
    fieldForm: {
        marginTop: '10px !important',
        marginBottom: '10px'
    },
    typography: {
        paddingLeft: 17
    },

    paper: {
        padding: theme.spacing(5),
    },

}))

export default useStyles;