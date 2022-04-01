import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '630px',
        margin: 'auto',
        paddingTop:20
    },
    formElement: {
        width: '100%'
    },
    buttonBack:{
        margin: '15px 0px 0px 15px'
    },
    iconButtonBack:{
        fontSize:30
    }
})

export default useStyles