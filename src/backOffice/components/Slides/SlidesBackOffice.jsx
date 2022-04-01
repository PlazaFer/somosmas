import React, { useEffect } from "react";
import {
  Paper,
  Container,
  IconButton,
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
  Box,
  TableCell
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useHistory } from "react-router-dom";
import useStyles from "../../styles/styledList";
import { useSelector, useDispatch } from 'react-redux'
import { fetchSlides, deleteSlides, selectAllSlides, selectSlidesStatus } from '../../../redux/slides/slidesSlice'
import { sweetAlertConfirm } from "../../../Utils/sweetAlertConfirm";

function SlidesBackOffice() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { slides,status } = useSelector(state => state.slides)
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchSlides());
  }, [])

  const handleDelete = async (id) => {
    const deleteIt = await sweetAlertConfirm();
    if(deleteIt){
      dispatch(deleteSlides(id))
    }
  }

  useEffect(() => {
    if(status === 'deleted'){
      dispatch(fetchSlides())
    }
  }, [status]);

  return (
    <Container className={classes.containerList}>
      <Box className={classes.contLink}>
        <Link
          exact="true"
          className={classes.styleLink}
          to="/backoffice/Slides/create"
        >
          Create a new slide
        </Link>
      </Box>

      <TableContainer component={Paper} className={classes.containerList}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Title</TableCell>
              <TableCell className={classes.tableCell} align="right">Image</TableCell>
              <TableCell className={classes.tableCell} align="right">Order</TableCell>
              <TableCell className={classes.tableCell} align="right">Edit</TableCell>
              <TableCell className={classes.tableCell} align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slides.map((row) => (
              <TableRow className={classes.tableRow} key={row.id}>
                <TableCell className={classes.tableCell} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <img
                    src={row.image}
                    alt={row.name}
                    className={classes.img}
                  />
                </TableCell>
                <TableCell className={classes.tableCell} align="right">{row.order}</TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <IconButton
                    component={Link}
                    onClick={() => history.push(`/backoffice/slides/edit/${row.id}`, row.id)}
                    variant="outlined"
                    color="secondary"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <IconButton
                    onClick={() => handleDelete(row.id)}
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  >
                    {" "}
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default SlidesBackOffice;
