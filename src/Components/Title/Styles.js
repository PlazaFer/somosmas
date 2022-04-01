import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  backgroundImage: (props) => ({
    width: '100%',
    height: '40vh',
    objectFit: props.isLogo ? 'contain' : 'cover',
  }),
  title: {
    textTransform: 'uppercase',
    paddingTop: '10px',
    fontWeight: '700',
  },
})

export default useStyles
