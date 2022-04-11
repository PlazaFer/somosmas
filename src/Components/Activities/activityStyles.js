import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  typographySize: {
    marginLeft: "10px",
    marginTop : "15px",
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem !important',
    },
  },
  cardList: {
    // justifyContent: 'space-between',
    columnGap: '40px',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
  },
  divContent:{
    [theme.breakpoints.down('lg')]:{
      margin: 'auto'
    }
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
