import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { getMembers, deleteMembers } from '../../../redux/Members/membersSlice';
import { sweetAlertConfirm } from '../../../Utils/sweetAlertConfirm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStyles from '../../styles/styledList';


const MemberList = () => {

    const dispatch = useDispatch();
    const { members, status } = useSelector((state) => state.members);
    const [ membersOrder, setMemebersOrder ] = useState([]);
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        dispatch(getMembers());
    }, [])
 
    
    useEffect(() => {
        if(status == 'deleted'){
            dispatch(getMembers());
        }
    }, [status])

    useEffect(() => {
        const orderMembers = members.map((e) => e).sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
        setMemebersOrder(orderMembers);
    }, [members])
    
    const handleDelete = async (id) => {
        const deleteIt = await sweetAlertConfirm();
        if (deleteIt) {
            dispatch(deleteMembers(id));
    }};

    return(
        <>
        <IconButton 
            aria-label="upload picture" 
            component="span" 
            className={classes.buttonBack}
            onClick={() => history.goBack()}
        >
            <ArrowBackIcon className={classes.iconButtonBack} />
        </IconButton>
        <Box className={classes.contLink}>
            <Link to='/backoffice/members/create' className={classes.styleLink}>
                <Button color='secondary' variant='contained'>Crear Miembro</Button>
            </Link>
        </Box>
        <Box className={classes.containerList}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell} align='center'>Nombre</TableCell>
                        <TableCell className={classes.tableCell} align='center'>Photo</TableCell>
                        <TableCell className={classes.tableCell} align='center'>Editar</TableCell>
                        <TableCell className={classes.tableCell} align='center'>Eliminar</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {membersOrder.map((member) => (
                        <TableRow key={member.id} className={classes.tableRow}>
                        <TableCell className={classes.tableCell} align='center'>{member.name}</TableCell>
                        <TableCell className={classes.tableCell} align='center'><img alt="Imagen Perfil" height="100px" width="100px" className={classes.img} src={member.image} /></TableCell>
                        <TableCell className={classes.tableCell} align='center'>
                            <EditIcon 
                                color="secondary" 
                                className={classes.icon}
                                onClick={() => history.push(`/backoffice/members/edit/${member.id}`, member.id)}
                            />
                        </TableCell>
                        <TableCell className={classes.tableCell} align='center'>
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
      </>
    )
};

export default MemberList