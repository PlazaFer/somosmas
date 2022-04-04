import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    container:{
        marginTop: 20,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTitle:{
        width: '35%',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgba(137,218,209,.5)'
    }, 
    title:{
        color: '#000',
        margin: 0,
        textAlign: 'center',
        fontSize: 20,
        padding: 5,
        [theme.breakpoints.up("sm")]: {
            fontSize: 30
		},
        [theme.breakpoints.up("md")]: {
            fontSize: 40
        }
    },

}))

export default useStyles