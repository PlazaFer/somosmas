import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({

    appBar:{
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    },

    icon:{
        fontSize: '2rem',
        cursor: 'pointer',
    }
}));


export default useStyles;