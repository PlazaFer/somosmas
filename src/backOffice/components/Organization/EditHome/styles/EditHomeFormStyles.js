import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    paper: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 'auto'
    },
    inputsImage: {
        margin: '5px 0px 20px 0px'
    },
    inputsText: {
        margin: '30px 0px 10px 0px'
    },
    button: {
        margin: '10px 0px 10px 0px'
    }

}))

export default useStyles;