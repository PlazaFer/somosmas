import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '320px',
    minWidth: '230px',
    height: '450px',
    margin: 'auto',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  styleTitle: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  styleLink: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.body1,
    textDecoration: 'none',
  },
  styleDescription: {
    paddingLeft: 2,
    paddingTop: 2,
    fontFamily: theme.typography.subtitle1,
  },
  containerLink: {
    margin: 'auto',
    display: 'flex',
  },
  paddingBetweenLink: {
    paddingLeft: 20,
  },
  leerMas: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: "0px",
    marginRight: '10px',
    cursor: 'pointer'
  },
}))
