import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import parse from 'html-react-parser';
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
import { useStyles } from "./styles/organizationScreenStyles";
import { getOrganizations } from "../../../redux/Organization/organizationSlice";

const OrganizationScreen = () => {

  const { organizations } = useSelector((state) => state.organization);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOrganizations())
  }, [dispatch])

  return (
      <>
      <Typography variant="h4" className={classes.title}>Organizacion</Typography>
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
              {organizations.name}
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <img
                alt="Logo Ong" 
                height="150px" 
                width="150px"
                src={organizations.logo}
                className={classes.img}
              />
            </TableCell>
            <TableCell align="center" className={classes.tableCell} sx={{maxWidth: 50}}>
              {parse(`${organizations.short_description}`)}
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <FontAwesomeIcon 
                icon={faPen} 
                className={classes.icon}
                onClick={() => history.push("/backoffice/organization/edit", organizations.id)}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
    </>
  );
};

export default OrganizationScreen;

