import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
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