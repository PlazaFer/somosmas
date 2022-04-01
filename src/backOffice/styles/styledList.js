import { makeStyles } from '@mui/styles'
import { tableCellClasses } from '@mui/material/TableCell'

const useStyles = makeStyles((theme) => ({
  containerList: {
    minWidth: 400,
    maxWidth: 1200,
    margin: 'auto',
    padding: '10px 10px',
  },
  styleLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
  contLink: {
    minWidth: 400,
    maxWidth: 1200,
    margin: 'auto',
    padding: '10px',
  },
  img: {
    minWidth: 100,
    maxWidth: 400,
    objectFit: 'contain',
  },
  tableCell: {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    tableCell:{
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
          },
          [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
          },
    },
    tableRow:{
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
          '&:last-child td, &:last-child th': {
            border: 0,
          },
    },
    title:{
        textAlign: 'center',
        paddingBottom: 20
    },
    icon:{
        color: theme.palette.secondary.main,
        cursor: 'pointer'
    },
    buttonBack:{
        margin: '15px 0px 0px 15px'
    },
    iconButtonBack:{
        fontSize: 30
    }
  }
}));

export default useStyles
