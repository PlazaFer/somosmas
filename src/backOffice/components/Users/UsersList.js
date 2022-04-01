import { useEffect, useState } from "react";
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
  IconButton,
  Box
} from "@mui/material";
import { getUsers, deleteUser } from "../../../redux/Users/userSlice";
import { sweetAlertConfirm } from "../../../Utils/sweetAlertConfirm";
import Spinner from '../../../shared/Spinner/Spinner';
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

  return (
    <>
    <IconButton 
      aria-label="upload picture" 
      component="span" 
      className={classes.buttonBack} 
      onClick={() => history.goBack()}
    >
      <ArrowBackIcon className={classes.iconButtonBack} />
    </IconButton>
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
    <Container className={classes.containerList}>
      <div className={classes.contLink}>
        <Link to={`${path}/create-user`} className={classes.styleLink}>
          <Button variant="contained" color="secondary">Crear Usuario</Button>
        </Link>
      </div>

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
    }
    </>
  );
};

export default UsersList;
