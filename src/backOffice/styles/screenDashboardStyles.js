import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: '80px',
        [theme.breakpoints.down('sm')]:{
            width: 'calc(100% - 180px)',
        }
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        width: 180,
        height: 180,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleIconContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        color: theme.palette.mercadopago.main,
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 60,
    },
    buttonContainer: {
        marginBottom: 10,
        backgroundColor: theme.palette.mercadopago.main,
        padding: "3px 10px 3px 10px",
        borderRadius: 5,
    },
    button: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: theme.palette.common.white
    }
}));


export default useStyles;