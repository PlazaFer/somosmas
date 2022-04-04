import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '630px',
        marginTop: "100px",
        margin: "auto"
    },
    formElement: {
        width: '100%'
    },
    finalLink: {
        marginTop: '20px',
    },
    button: {
        marginTop: theme.spacing(2),
    },
}))

export default useStyles