import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  item: {
    textDecoration: "none",
    color: theme.palette.common.black,
    margin: "10px auto 10px auto",
    [theme.breakpoints.up("md")]: {
      margin: "10px 5px 10px 5px",
    },
  },
  containerButton:{
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton: {
    fontSize: 40,
  },
}));
