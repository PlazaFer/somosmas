import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Button,
  Box,
  InputAdornment,
  TextField,
  Toolbar
} from "@mui/material";
import { getUsers, deleteUser } from "../../../redux/Users/userSlice";
import { sweetAlertConfirm } from "../../../Utils/sweetAlertConfirm";
import Spinner from '../../../shared/Spinner/Spinner';
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SearchIcon from '@mui/icons-material/Search';
import useStyles from "../../styles/styledList";
import DecorativeLineBW from "../../../Components/DecorativeLine/DecorativeLine";

const UsersList = () => {
  const { users, status } = useSelector((state) => state.users);
  const [ usersOrder, setUsersOrder ] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const history = useHistory();


  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if(status == 'deleted'){
      dispatch(getUsers());
    }
  }, [status])
  
  useEffect(() => {
    const orderUsers = users && users.map((e) => e).sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
    setUsersOrder(orderUsers);
  }, [users])
  
  const handleDelete = async (id) => {
    const deleteIt = await sweetAlertConfirm();
    if (deleteIt) {
      dispatch(deleteUser(id));
    }
  };

  const debounceRef = useRef();

  const handleChange = (e) => {

    if(debounceRef.current){
      clearInterval(debounceRef.current);
    }

    if(e.target.value.length <= 2){
      debounceRef.current = setTimeout(() => {
        dispatch(getUsers());
      }, 600)
    }

    if(e.target.value.length >= 3){
      debounceRef.current = setTimeout(() => {
        dispatch(getUsers(`?search=${e.target.value}`));
      }, 600)
    }
  }

  return (
    <>
    {
      status === 'loading' 
      ? 
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Spinner 
          color='#000'
          width={80}
          height={80}
        />
      </Box>
    :
    <>
    <Toolbar></Toolbar>
    <Container className={classes.containerList}>
      <Box className={classes.containerButtonSearch}>
      <Box>
        <Link to={`${path}/create-user`} className={classes.styleLink}>
          <Button variant="contained" color="secondary">Crear Usuario</Button>
        </Link>
      </Box>
      <Box>
      <TextField
          label="Buscar usuario"
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
              <TableCell className={classes.tableCell}>Nombre</TableCell>
              <TableCell className={classes.tableCell} align="center">
                Email
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Modificar
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Eliminar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersOrder && usersOrder.length > 0 &&
              usersOrder.map((user) => (
                <TableRow key={user.id} className={classes.tableRow}>
                  <TableCell
                    className={classes.tableCell}
                    component="th"
                    scope="row"
                  >
                    {user.name}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    {user.email}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() =>
                        history.push(`${path}/edit-user/${user.id}`, user.id)
                      }
                    >
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() => handleDelete(user.id)}
                    >
                      <DeleteForeverIcon />
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
    }
    </>
  );
};

export default UsersList;
