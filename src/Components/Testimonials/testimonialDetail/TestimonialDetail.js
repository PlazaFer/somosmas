import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { getTestimonialsById } from "../../../redux/Testimonials/testimonialsSlice";
import Spinner from "../../../shared/Spinner/Spinner";
import { Box, Typography, Container, Button } from "@mui/material";
import { useStyles } from "../styles/testimonalsDetailStyles";

export const TestimonialDetail = () => {
  const { testimonialsID, status } = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { state } = useLocation();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getTestimonialsById(state));
  }, []);

  return (
    <>
      <Box className={classes.containerButton}>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => push("/testimonios")}
        >
          Volver
        </Button>
      </Box>
      {status !== "success" ? (
          <Box className={classes.containerSpinner}>
              <Spinner width={80} height={80} color="#000" />
          </Box>
      ) : (
        <Container className={classes.container}>
          <Box component="div" className={classes.image}>
            <img
              src={testimonialsID?.image}
              alt={testimonialsID?.name}
              className={classes.photo}
            />
          </Box>
          <Box component="div" className={classes.content}>
            <Typography variant="h3" className={classes.name}>
              {testimonialsID?.name}
            </Typography>
            <Typography variant="body1">
              {testimonialsID?.description}
            </Typography>
          </Box>
        </Container>
      )}
    </>
  );
};
