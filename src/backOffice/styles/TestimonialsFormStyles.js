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
    },
    formElement: {
        width: '100%'
    }
})

export default useStyles