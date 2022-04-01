import { makeStyles } from '@mui/styles'
import { alpha } from '@mui/material/styles'

// Styles
const useStyles = makeStyles((theme) => ({
  containerGeneral: {
    width: '100%',
    height: '300px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: '500px',
      width: '100%',
    },
  },
  sliderContainer: {
    position: 'relative',
    height: '500px',
    color: '#fff',
    width: '100%',
    background: '#919191',
  },
  textContainer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      bottom: '10%',
      width: '480px',
      padding: 20,
      marginLeft: 100,
    },
    [theme.breakpoints.up('md')]: {
      width: '800px',
    },
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#FFF',
    lineHeight: 0.9,
    [theme.breakpoints.up('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 50,
    },
  },
  textDesc: {
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 0,
    lineHeight: 1,
    [theme.breakpoints.up('sm')]: {
      fontSize: 13,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  sliderImage: {
    filter: 'brightness(50%)',
    objectFit: 'cover',
    width: '100%',
    height: '300px',
    [theme.breakpoints.up('md')]: {
      height: '500px',
      width: '100%',
    },
  },
  slideButtonLeft: {
    left: '10px',
    position: 'absolute',
    top: '50%',
    color: '#919191',
    backgroundColor: '#fff',
    ':hover': {
      backgroundColor: '#efefef',
      color: '#818181',
    },
  },
  slideButtonRight: {
    right: '10px',
    position: 'absolute',
    top: '50%',
    color: '#919191',
    backgroundColor: '#fff',
    ':hover': {
      backgroundColor: '#efefef',
      color: '#818181',
    },
  },
  sliderDots: {
    marginTop: '5px',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    background: 'none',
  },
}))

export default useStyles
