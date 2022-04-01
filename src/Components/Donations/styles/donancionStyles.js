import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    formulario: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDonar: {
        marginTop: theme.spacing(2)
    }
}))


export default useStyles;