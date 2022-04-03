import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles((theme) => ({
    appbar: {
        display: 'none',
        backgroundColor: '#fff',
        height: '12vh',
        [theme.breakpoints.up('md')]: {
          display: 'block'
        },
      },
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
}));