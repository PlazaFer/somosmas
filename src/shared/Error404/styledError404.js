import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    box: {
        width: "100%",
        height: "65vh",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
    },
    texto404:{
        marginTop: "50px",
    },
    textNotFound:{
        fontWeight: "bold",
        marginTop: "20px",
    },
    img:{
        width:"10rem",
        height:"10rem"
    }
}))

export default useStyles;