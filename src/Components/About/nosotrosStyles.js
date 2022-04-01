import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  typographySize: {
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem !important',
    },
  },
  cardList: {
    justifyContent: 'flex-start',
    columnGap: '60px',
    marginBottom: '35px',
  },
}))

export default useStyles
