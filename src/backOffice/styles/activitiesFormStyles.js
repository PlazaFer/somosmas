import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
  },
  form: {
    padding: '10px',
    maxWidth: '70%',
    margin: 'auto',
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
}))

export default useStyles