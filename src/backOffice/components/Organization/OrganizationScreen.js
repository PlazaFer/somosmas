import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import useStyles from "../../styles/styledList";
import EditHomeForm from "./EditHome/EditHomeForm";

const OrganizationScreen = () => {
  const classes = useStyles();

  const datosMockeados = {
    name: "Somos Mas",
    image: process.env.PUBLIC_URL + "/images/LOGO-SOMOS-MAS.png",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  return (
      <>
      <Typography variant="h3" className={classes.title}>Organizacion</Typography>
      <Box className={classes.containerList}>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table sx={{minWidth: 300}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>Nombre</TableCell>
            <TableCell align="center" className={classes.tableCell}>Imagen</TableCell>
            <TableCell align="center" className={classes.tableCell}>Descripcion</TableCell>
            <TableCell align="center" className={classes.tableCell}>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={classes.tableRow}>
            <TableCell align="center" className={classes.tableCell}>
              {datosMockeados.name}
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <img
                alt="Logo Ong" 
                height="150px" 
                width="150px"
                src={datosMockeados.image}
                className={classes.img}
              />
            </TableCell>
            <TableCell align="center" className={classes.tableCell} sx={{maxWidth: 50}}>
              {datosMockeados.shortDescription}
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
                <Link to="/backoffice/organization/edit">
                    <FontAwesomeIcon icon={faPen} className={classes.icon}/>
                </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {/* <EditHomeForm /> */}
      </Box>
    </>
  );
};

export default OrganizationScreen;

