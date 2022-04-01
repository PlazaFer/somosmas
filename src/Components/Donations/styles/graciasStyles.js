import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    Containertexto:{
        width: '100%',
        margin: '30px auto 0px auto',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height: '150px',
        marginBottom: 15,
        [theme.breakpoints.up('sm')]:{
            height: '250px'
        },
        [theme.breakpoints.up('md')]:{
            height: '350px',
        }
    },
    text: {
        fontSize: 18,
        [theme.breakpoints.up('sm')]:{
            fontSize: 30
        },
        [theme.breakpoints.up('md')]:{
            fontSize: 32
        }
    }
}))


export default useStyles;