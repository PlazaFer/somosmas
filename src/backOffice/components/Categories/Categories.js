import React, { useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Button, InputAdornment, TextField, Box, Toolbar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux'
import { getCategories,deleteCategory } from '../../../redux/Categories/categorySlice'
import useStyles from '../../styles/styledList'
import DecorativeLineBW from '../../../Components/DecorativeLine/DecorativeLineBW'
import { useHistory } from 'react-router-dom';
import { sweetAlertConfirm } from '../../../Utils/sweetAlertConfirm';


export default function CategoriesList() {
  const classes = useStyles();
  const {categories, status} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  const handleDelete = async (id)=>{
    const deleteIt = await sweetAlertConfirm();
    if(deleteIt) {
      dispatch(deleteCategory(id));
    }
  }

  
  useEffect(() => {
    if (status === 'deleted') {
      dispatch(getCategories())
    }
  }, [status])
  
  let orderedCategories = categories.map((e) => e).sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));

  const debounceRef = useRef();

  const handleChange = (e) => {

    if(debounceRef.current){
      clearInterval(debounceRef.current);
    }

    if(e.target.value.length <= 2){
      debounceRef.current = setTimeout(() => {
        dispatch(getCategories());
      }, 300)
    }

    if(e.target.value.length >= 3){
      debounceRef.current = setTimeout(() => {
        dispatch(getCategories(`?search=${e.target.value}`));
      }, 300)
    }
  }

  return (
    <>
    <Toolbar></Toolbar>
      <Container className={classes.containerList}>
        <Box className={classes.containerButtonSearch}>
        <Box>
          <Link to="/backoffice/categories/create" className={classes.styleLink}>
            <Button color='secondary' variant='contained'>Crear Categoria</Button>
          </Link>
        </Box>
        <Box>
        <TextField
          label="Buscar categoria"
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

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align='center' className={classes.tableCell}>Nombre</TableCell>
                <TableCell align='center' className={classes.tableCell}>Imagen</TableCell>
                <TableCell align='center' className={classes.tableCell} >Fecha</TableCell>
                <TableCell align='center' className={classes.tableCell}>Modificar</TableCell>
                <TableCell align='center' className={classes.tableCell}>Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderedCategories.map(({name, image, created_at,id}) => (
                <TableRow key={name} className={classes.tableRow}>
                  <TableCell component="th" className={classes.tableCell} >
                    {name}
                  </TableCell>
                  <TableCell align='center' className={classes.tableCell} >
                    <img src={image} alt={name} className={classes.img} />
                  </TableCell>
                  <TableCell align='center' className={classes.tableCell} >
                    {created_at}
                  </TableCell>
                  <TableCell align='center' className={classes.tableCell} >
                    <Button variant="text" color="secondary" onClick={() => history.push(`/backoffice/categories/edit/${id}`, id)}>
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell align='center' className={classes.tableCell} >
                    <Button variant="text" color="secondary" onClick={() => handleDelete(id)}>
                      <DeleteForeverIcon/>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <DecorativeLineBW></DecorativeLineBW>
      </Container>
    </>
  )
}
