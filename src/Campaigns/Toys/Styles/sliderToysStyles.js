import { createStyles, makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    sliderImage: {
      display: 'block',
      overflow: 'hidden',
      objetFit: 'cover',

      [theme.breakpoints.down('sm')]: {
        height: '400px',
        marginLeft: '-80px',
      },
      [theme.breakpoints.up('sm')]: {
        height: '400px',
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        height: 450,
        width: '100%',
      },
      [theme.breakpoints.up('lg')]: {
        height: 550,
        width: '100%',
      },
    },
    sliderArrows: {
      position: 'relative',
      marginTop: '-50px',
      backgroundColor: 'none',
    },
    imageBox: {
      backgroundColor: 'none',
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      pl: 2,
      paddingLeft: '10px',
    },
  }),
)
