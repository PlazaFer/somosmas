import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Toolbar,
  TextField,
  Container,
  InputAdornment
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { getMembers, deleteMembers } from "../../../redux/Members/membersSlice";
import { sweetAlertConfirm } from "../../../Utils/sweetAlertConfirm";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from '@mui/icons-material/Search';
import useStyles from "../../styles/styledList";

const MemberList = () => {
  const dispatch = useDispatch();
  const { members, status } = useSelector((state) => state.members);
  const [membersOrder, setMemebersOrder] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(getMembers());
  }, []);

  useEffect(() => {
    if (status == "deleted") {
      dispatch(getMembers());
    }
  }, [status]);

  useEffect(() => {
    const orderMembers = members
      .map((e) => e)
      .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
    setMemebersOrder(orderMembers);
  }, [members]);

  const handleDelete = async (id) => {
    const deleteIt = await sweetAlertConfirm();
    if (deleteIt) {
      dispatch(deleteMembers(id));
    }
  };

  const debounceRef = useRef();

  const handleChange = (e) => {

    if(debounceRef.current){
      clearInterval(debounceRef.current);
    }

    if(e.target.value.length <= 2){
      debounceRef.current = setTimeout(() => {
        dispatch(getMembers());
      }, 300)
    }

    if(e.target.value.length >= 3){
      debounceRef.current = setTimeout(() => {
        dispatch(getMembers(`?search=${e.target.value}`));
      }, 300)
    }
  }

  return (
    <>
      <Toolbar></Toolbar>
      <Container>
        <Box className={classes.containerButtonSearch}>
          <Box className={classes.contLink}>
            <Link to="/backoffice/members/create" className={classes.styleLink}>
              <Button color="secondary" variant="contained">
                Crear Miembro
              </Button>
            </Link>
          </Box>
          <Box>
            <TextField
              label="Buscar miembro"
              name="search"
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#000" }} />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box className={classes.containerList}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell} align="center">
                    Nombre
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    Photo
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    Editar
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    Eliminar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {membersOrder.map((member) => (
                  <TableRow key={member.id} className={classes.tableRow}>
                    <TableCell className={classes.tableCell} align="center">
                      {member.name}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      <img
                        alt="Imagen Perfil"
                        height="100px"
                        width="100px"
                        className={classes.img}
                        src={member.image}
                      />
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      <EditIcon
                        color="secondary"
                        className={classes.icon}
                        onClick={() =>
                          history.push(
                            `/backoffice/members/edit/${member.id}`,
                            member.id
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      <DeleteIcon
                        color="secondary"
                        className={classes.icon}
                        onClick={() => handleDelete(member.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default MemberList;
