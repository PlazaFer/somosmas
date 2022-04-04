import React from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "../Card/CardComponent";
import { Container, Grid } from "@mui/material";
import { useStyles } from "./styles/testimonialsBodyStyle";

export const TestimonialsBody = ({ testimonials }) => {

    const history = useHistory();
    const classes = useStyles();


  return (
    <Container>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.gridContainer}
      >
        {testimonials.map((testimonial) => (
          <Grid
            item
            key={testimonial.id}
            sm={12}
            md={6}
            lg={4}
            className={classes.gridItem}
          >
            <CardComponent
              key={testimonial.id}
              title={testimonial.name}
              image={testimonial.image}
              description={testimonial.description}
              leerMasLink={() => history.push(`/testimonios/${testimonial.id}`, testimonial.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
