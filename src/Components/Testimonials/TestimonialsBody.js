import React from "react";
import { Container, Grid } from "@mui/material";
import CardComponent from "../Card/CardComponent";
import { useStyles } from "./styles/testimonialsBodyStyle";

export const TestimonialsBody = ({ testimonials }) => {

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
            //   leerMasLink={() => handleSubmit(testimonial.name, testimonial.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
