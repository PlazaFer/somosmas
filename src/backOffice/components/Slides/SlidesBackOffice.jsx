import React, { useEffect, useRef } from "react";
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
  TableCell,
  InputAdornment,
  TextField,
  Toolbar,
  Button
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useHistory } from "react-router-dom";
import useStyles from "../../styles/styledList";
import { useSelector, useDispatch } from 'react-redux'
import { fetchSlides, deleteSlides } from '../../../redux/slides/slidesSlice'
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

  const debounceRef = useRef();

  const handleChange = (e) => {

    if(debounceRef.current){
      clearInterval(debounceRef.current);
    }

    if(e.target.value.length <= 2){
      debounceRef.current = setTimeout(() => {
        dispatch(fetchSlides());
      }, 300)
    }

    if(e.target.value.length >= 3){
      debounceRef.current = setTimeout(() => {
        dispatch(fetchSlides(`?search=${e.target.value}`));
      }, 300)
    }
  }

  return (
    <>
    <Toolbar></Toolbar>
    <Container className={classes.containerList}>
      <Box className={classes.containerButtonSearch}>
      <Box>
        <Link
          exact="true"
          className={classes.styleLink}
          to="/backoffice/Slides/create"
        >
          <Button
            color='secondary' variant='contained'
          >
            Crear slide
          </Button>
        </Link>
      </Box>
      <Box>
        <TextField
          label="Buscar slide"
          name='search'
          type='text'
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon sx={{color: '#000'}}/></InputAdornment>,
          }}
          variant="standard"
          onChange={handleChange}
        />
        </Box>
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
    </>
  );
}

export default SlidesBackOffice;
