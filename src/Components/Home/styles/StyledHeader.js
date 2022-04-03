import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  // links: {
  //   padding: '0 10px',
  //   color: '#000',
  //   textDecoration: 'none',
  // },
  // active: {
  //   color: '#545e6f',
  // },
  // colorActivo: {
  //   color: theme.palette.secondary.main,
  // },
  // typographyLinks: {
  //   fontSize: '15px',
  //   paddingRight: 20,
  //   [theme.breakpoints.down('md')]: {
  //     paddingRight: 20,
  //   },
  // },
  // logosx: {
  //   maxWidth: '20%',
  //   marginLeft: '65%',
  //   marginRight: '10%',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // },
  // logosm: {
  //   [theme.breakpoints.up('md')]: {
  //     paddingLeft: '20px',
  //     maxWidth: '60%',
  //   },
  //   [theme.breakpoints.down('md')]: {
  //     display: 'none',
  //   },
  // },
  // styledBoxSm: {
  //   backgroundColor: '#fff',
  //   flexGrow: 1,
  //   [theme.breakpoints.down('md')]: {
  //     display: 'flex',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // },

  // styledBoxMd: {
  //   [theme.breakpoints.up('md')]: {
  //     width: '85%',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'flex-end',
  //     backgroundColor: '#fff',
  //   },
  //   [theme.breakpoints.down('md')]: {
  //     display: 'none',
  //   },
  // },
  appbar: {
    backgroundColor: '#fff',
    height: '12vh',
    [theme.breakpoints.down('md')]: {
      height: '12vh',
    },
  },

  // boxLogin: {
  //   display: 'flex',
  //   marginRight: '20px',
  // },
  // boxLink: {
  //   display: 'flex',
  //   marginTop: '10px',
  // },

  // button: {
  //   minWidth: '100px',
  // },
  // icon: {
  //   [theme.breakpoints.down('md')]: {
  //     fontSize: 50,
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     fontSize: 30,
  //   },
  // },
  // linkBack: {
  //   fontSize: '15px',
  // },
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  subContainer:{
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerLogo:{
    // width: '20%'
  },
  linksContainer:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.up('lg')]:{
      justifyContent: 'center'
    }
  },
  buttonsContainer:{
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%'
  },
  logosm:{
    width: '100px',
  },
  link:{
    textDecoration: 'none',
    marginLeft: 25,
    color: '#000',
    '&:hover':{
      borderBottom: '2px solid #000'
    }
  },
  buttonLink:{
    textDecoration: 'none',
    marginLeft: 25,
    marginRight: 10
  }
}))

export default useStyles
