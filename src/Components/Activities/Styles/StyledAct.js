import { makeStyles } from '@mui/styles'
import { height } from '@mui/system'

const useStyles = makeStyles((theme) => ({
  typographySize: {
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem !important',
    },
  },
  cardList: {
    marginBottom: '40px',
    justifyContent: 'space-between',
    columnGap: '10px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  iconButton: {
    cursor: 'pointer',
    position: 'end',
  },

  image: {
    flex: '0 0 40%',
    boxShadow: '-4px 14px 23px -5px rgba(0,0,0,0.82)',
  },

  photo: {
    width: '100%',
    display: 'block',
    margin: '0',
    borderRadius: '5px',
  },

  container: {
    display: 'flex',
    maxWidth: '80%',
    margin: '0 auto',
    marginTop: '80px',
    gap: '50px',
    alignItems: 'center',
  },

  content: {
    flex: '1',
    padding: '20px',
  },

  containerThree: {
    marginBottom: '40px',
  },
}))

export default useStyles
