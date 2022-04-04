import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(5),
      },
      form: {
        padding: '10px',
        maxWidth: '70%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
          maxWidth: '100%',
        },
      },
      paper: {
        padding: theme.spacing(5),
      },
      inputs: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
      },
      button: {
        marginTop: theme.spacing(2),
      },
      buttonBack:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      },
      errorCkEditor: {
        paddingLeft: theme.spacing(2),
      },
      title: {
        textAlign: 'center',
        marginBottom: theme.spacing(2),
      },
      finalLink: {
        marginTop: '20px',
      },
      img: {
        width:250,
        height:250,
        objectFit: 'contain',
        [theme.breakpoints.down('md')]: {
          width:100,
          height:100,
        },
      }
}));    