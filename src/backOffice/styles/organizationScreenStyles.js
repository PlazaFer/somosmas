import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    title:{
        textAlign: 'center',
        paddingTop: '20px'
    },
    table:{
        width: 10
    },
    tableCell:{
        maxWidth: 20
    },
    tableContainer:{
        minWidth: 400,
        maxWidth: 1200,
        margin: "40px auto 40px auto",
        padding:"5px 5px",
    },
    styleLink: {
        textDecoration: 'none',
        color: theme.palette.mercadopago.main,
        cursor: "pointer",
    }
}));

export default useStyles;
