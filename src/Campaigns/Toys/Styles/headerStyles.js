import { makeStyles } from "@mui/styles";


// Styles with MakeStyles
export const useStyles = makeStyles((theme) => ({
      appbar:{
        [theme.breakpoints.up('xl')]:{
          opacity: 0.8
        }
      },
      container__logoCampaing:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.common.white,
        width: 100,
        height: 100,
        margin: '5px 20px 5px 0px',
        borderRadius: '50%'
      },
      img__logoCampaing:{
        objectFit: 'contain',
        width: 90,
        height: 90,
      },
      logoOng: {
        display: 'none',
        [theme.breakpoints.up('sm')]:{
          display: 'block',
          width: 80,
          height: 80,
          margin: '0px 20px 0px 20px',
        }
      },
      slogan: {
        display: 'none',
        [theme.breakpoints.up('lg')]:{
          display: 'block'
        }
      },
      divider: {
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.down('sm')]:{
          display: 'none'
        }
      }
}))