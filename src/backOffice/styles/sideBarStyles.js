import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    item:{
        textDecoration: 'none',
        color: theme.palette.common.black,
        margin: '10px auto 10px auto',
        [theme.breakpoints.up('md')]:{
            margin: '10px 5px 10px 5px'
        }
    },
    containerText:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0px 0px 0px'
    },
    logoOng: {
        display: 'block',
        width: 80,
        height: 80,
        margin: '0px 20px 0px 20px',
    }
}));


export default useStyles;