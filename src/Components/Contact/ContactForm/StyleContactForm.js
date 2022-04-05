import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  containerForm: {
    paddingTop: '20px',
    maxWidth: '700px',
    minWidth: '270px',
    margin: '0px auto 40px auto',
  },
  fieldForm: {
    marginTop: '20px !important',
  },
  typographyTextArea: {
    paddingLeft: 12,
    paddingBottom: 10,
  },
  titleForm:{
    textAlign: 'center',
    fontSize: 18,
    [theme.breakpoints.up('sm')]:{
      fontSize: 30
    }
  },
  paper:{
    padding: theme.spacing(4)
  },
  buttonContacto:{
    marginTop: theme.spacing(3)
  }
}))

export default useStyles
