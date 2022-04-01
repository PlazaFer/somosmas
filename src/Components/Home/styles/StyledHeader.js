import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  links: {
    padding: '0 10px',
    color: '#000',
    textDecoration: 'none',
  },
  active: {
    color: '#545e6f',
  },
  colorActivo: {
    color: theme.palette.secondary.main,
  },
  typographyLinks: {
    fontSize: '15px',
    paddingRight: 20,
    [theme.breakpoints.down('md')]: {
      paddingRight: 20,
    },
  },
  logosx: {
    maxWidth: '20%',
    marginLeft: '65%',
    marginRight: '10%',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logosm: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '20px',
      maxWidth: '75%',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  styledBoxSm: {
    backgroundColor: '#fff',
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  styledBoxMd: {
    [theme.breakpoints.up('md')]: {
      width: '85%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      backgroundColor: '#fff',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  appbar: {
    backgroundColor: '#fff',
    height: '18vh',
    [theme.breakpoints.down('sm')]: {
      height: '15vh',
    },
  },

  boxLogin: {
    display: 'flex',
    marginRight: '20px',
  },
  boxLink: {
    display: 'flex',
    marginTop: '10px',
  },

  button: {
    minWidth: '100px',
  },
  icon: {
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  linkBack: {
    fontSize: '15px',
  },
}))

export default useStyles
