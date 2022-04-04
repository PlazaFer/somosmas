import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    backgroundColor: '#FFF',
  },

  logo: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '40%',
      paddingTop: 15,
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '40%',
    },
  },
  a_Home: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '40%',
      color: 'inherit',
      textDecoration: 'none',
    },
  },

  a_Redes: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '5px',
      maxWidth: '40%',
      color: 'inherit',
      textDecoration: 'none',
    },
  },

  a_Campaings: {
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '40%',
      color: 'inherit',
    },
  },
  typographyFb: {
    fontSize: '15px',
    paddingRight: 20,
    paddingTop: 45,
  },
  typographyRedes: {
    fontSize: '15px',
    paddingTop: 45,
    paddingRight: 20,
    paddingLeft: 20,
  },
  typographyIg: {
    fontSize: '15px',
    paddingRight: 20,
    paddingTop: 45,
  },
  typographyHom: {
    fontSize: '15px',
    paddingTop: 45,
  },
  styleFlex: {
    display: 'flex',
  },
  icon: {
    paddingTop: 40,
  },
}))
