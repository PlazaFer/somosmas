import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  
  },
  redBox: {
    width: '33.3%',
    height: '1em',
    backgroundColor: theme.palette.primary.main,
  },
  yellowBox: {
    width: '33.3%',
    height: '1em',
    backgroundColor: theme.palette.warning.main,
  },
  blueBox: {
    width: '33.4%',
    height: '1em',
    backgroundColor: theme.palette.secondary.main,
  },
  black: {
    width: '25%',
    height: '1em',
    backgroundColor: '#888888',
  },
  grey: {
    width: '25%',
    height: '1em',
    backgroundColor: '#BFBFB4',
  },
}))

export default useStyles
