import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    containerForm:{      
        padding: '10px',
        maxWidth: '70%',
        margin:'auto'
    },
    fieldForm:{
        marginTop: '10px !important',
    },
    txt: {
        marginTop: '10px !important',
        marginBottom: '10px',
        width:"100%"
    },
    typographyImg: {
        paddingLeft:15
    },
    button: {
        marginTop: theme.spacing(3)
    },
    buttonBack:{
        margin: '15px 0px 0px 15px'
    },
    iconButtonBack:{
        fontSize: 30
    }

}))

export default useStyles;