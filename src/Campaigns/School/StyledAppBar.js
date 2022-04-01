import { makeStyles } from '@mui/styles'
import { padding } from '@mui/system'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
    [theme.breakpoints.up('xl')]: {
      opacity: 0.8,
    },
  },

  boxLogoDeCampana: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px 10px 5px 0px',
    [theme.breakpoints.up('sm')]:{
      margin: '5px 20px 5px 0px'
    }
  },

  logoDeCampaña: {
    height: '55px',
    [theme.breakpoints.up('sm')]:{
      height: '70px',
    }
  },

  boxLogoDeOng: {
    margin: '0px 0px 0px 20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  slogan: {
    padding: '3px 0px 3px 0px',
    textAlign: 'center',
    backgroundColor: '#EC4C4C',
    fontSize: '1.5rem',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  sloganToys: {
    padding: '3px 0px 3px 0px',
    textAlign: 'center',
    backgroundColor: '#5FCDC1',
    fontSize: '1.5rem',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  line: {
    width: '100%',
    height: '1em',
    backgroundColor: '#EC4C4C',
  },
  lineToys: {
    width: '100%',
    height: '1em',
    backgroundColor: '#5FCDC1',
  },
  toolB: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]:{
      padding: '0px 40px 0px 20px'
    }
  },
  button: {
    fontWeight: '700',
  },
  buttonInicio: {
    marginRight: '10px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export default useStyles
