import { createTheme } from '@mui/material/styles'
import './App.css'

const Nunito = "'Nunito', sans-serif"
const Gotic = "'Fira Sans', sans-serif;"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#C63A3B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8DCAFF',
      contrastText: '#0D0D0D',
    },
    info: {
      main: '#38D4C3',
      contrastText: '#0D0D0D',
    },
    warning: {
      main: '#F3EA73',
      contrastText: '#0D0D0D',
    },
    error: {
      main: '#EC4C4C',
      contrastText: '#FFFFFF',
    },
    mercadopago: {
      main: '#009ee3',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      fontFamily: Gotic,
    },
    h2: {
      fontFamily: Gotic,
    },
    h3: {
      fontFamily: Gotic,
    },
    h4: {
      fontFamily: Gotic,
    },
    h5: {
      fontFamily: Gotic,
    },
    h6: {
      fontFamily: Gotic,
    },
    subtitle1: {
      fontFamily: Nunito,
    },
    subtitle2: {
      fontFamily: Nunito,
    },
    body1: {
      fontFamily: Nunito,
    },
    body2: {
      fontFamily: Nunito,
    },
    overline: {
      fontFamily: Nunito,
    },
    caption: {
      fontFamily: Nunito,
    },
    button: {
      fontFamily: Nunito,
    },
  },
})
