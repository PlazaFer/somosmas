import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    newsletterContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        padding: '40px 0',
        gap: '15px',
        
    },
    form: {
        display: 'flex',
        alignItems:'center',
        flexDirection: 'column',
        gap: '15px',
        [theme.breakpoints.up('sm')]:{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }
    },
    text:{
        marginTop: 8
    },
    inputError:{
        backgroundColor: 'none',
        color: '#F00'
    },
    inputContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}));

export default useStyles;
