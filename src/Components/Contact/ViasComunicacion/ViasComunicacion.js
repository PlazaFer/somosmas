import React from "react";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faClock,
  faStreetView
} from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "./styles/viasComunicacionStyles";


export const ViasComunicacion = () => {

    const { organizations } = useSelector((state) => state.organization);
    const classes = useStyles();

  return (
    <>
      <Box className={classes.containerTitle}>
        <Typography variant="body1" className={classes.title}>Otras vias de comunicacion</Typography>
      </Box>
      <Box className={classes.containerInfo}>
      <Box className={classes.boxInfo}>
            <FontAwesomeIcon icon={faStreetView} className={classes.icon} />
            <Typography variant="body2" className={classes.typo}>{ organizations.address }</Typography>
        </Box>
        <Box className={classes.boxInfo}>
            <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
            <Typography variant="body2" className={classes.typo}>info@somosmas.org</Typography>
        </Box>
        <Box className={classes.boxInfo}>
            <FontAwesomeIcon icon={faPhone} className={classes.icon} />
            <Typography variant="body2" className={classes.typo}>+57 (1) 5551234</Typography>
        </Box>
        <Box className={classes.boxInfo}>
            <FontAwesomeIcon icon={faClock} className={classes.icon} />
            <Typography variant="body2" className={classes.typo}>L a V: 9:00hs a 18:00hs</Typography>
        </Box>
      </Box>
    </>
  );
};
