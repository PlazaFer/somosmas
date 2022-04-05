import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    containerTitle: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px auto 10px auto'
    },
    title: {
        fontWeight: 'bold'
    },
    boxInfo:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: theme.spacing(2)
    },
    icon:{
        fontSize: 22,
        color: theme.palette.primary.main,
        marginRight: theme.spacing(2)
    },
    typo:{

    },
}));