import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
      image: {
        maxWidth: '600px',
        height: '400px',
        minWidth: '275px',
        boxShadow: '-4px 14px 23px -5px rgba(0,0,0,0.82)',
      },
    
      photo: {
        width: '100%',
        height: '100%',
        display: 'block',
        margin: '0',
        borderRadius: '5px',
      },
    
      container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '80px auto 50px auto',
        gap: '50px',
        [theme.breakpoints.up('sm')]:{
            flexDirection: 'row-reverse',
            
        },
      },
      content: {
        maxWidth: '550px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      },
      name:{
        fontSize: 30,
          marginBottom: 30,
          [theme.breakpoints.up('md')]:{
              fontSize: 50
          }
      },
      containerButton:{
          width: '100%',
          margin: '30px 0px 10px 30px'
      },
      containerSpinner:{
          width: '100vw',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      }
}));