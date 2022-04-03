import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '320px',
    height: '100%',
    // margin: 'auto',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  styleDescription: {
    paddingLeft: 2,
    fontFamily: theme.typography.subtitle1,
  },
  containerButton: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: "10px",
    marginRight: '10px',
  },
  button:{
    cursor: 'pointer',
    fontWeight: 'bold',
    "&:hover":{
      textDecoration: 'underline'
    }
  }
}))
