import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Toolbar
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faListCheck,
  faTableList,
  faMessage,
  faSitemap,
  faSliders,
  faUsers,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import useStyles from "../../styles/screenDashboardStyles";

const ScreenDashboard = () => {
  const options = [
    { name: "Novedades", icon: faNewspaper, path: "/backoffice/news" },
    { name: "Actividades", icon: faListCheck, path: "/backoffice/activities" },
    { name: "Categorias", icon: faTableList, path: "/backoffice/categories" },
    { name: "Testimonios", icon: faMessage, path: "/backoffice/testimonials" },
    { name: "Organizacion", icon: faSitemap, path: "/backoffice/organization" },
    { name: "Slides", icon: faSliders, path: "/backoffice/slides" },
    { name: "Usuarios", icon: faUsers, path: "/backoffice/users" },
    { name: "Miembros", icon: faUserGroup, path: "/backoffice/members" },
  ];

  const classes = useStyles();

  return (
      <Grid
        container
        spacing={2}
        className={classes.container}
      >
        {options.map((option, index) => (
          <Grid key={index} item xs={12} md={4} xl={3} className={classes.gridItem}>
            <Paper className={classes.paper} elevation={4}>
                <Box className={classes.titleIconContainer}>
                    <Typography gutterBottom className={classes.title}>{option.name}</Typography>
                    <FontAwesomeIcon icon={option.icon} className={classes.icon}/>
                </Box>
                <Box className={classes.buttonContainer}>
                    <Link to={option.path} className={classes.button}>Ir</Link>    
                </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
  );
};

export default ScreenDashboard;
