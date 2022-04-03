import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  containerToolbar:{
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  containerHeaderMobile: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: "2rem",
    cursor: "pointer",
  },
  logoHeader: {
    width: "90px",
  },
}));
