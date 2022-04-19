import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '50px auto 50px auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]:{
      flexDirection: 'row',
    }
  },
  containerMap:{
    height: '520px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '0px'
  }
}))

export default useStyles
