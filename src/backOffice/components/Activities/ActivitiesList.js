import { useRef } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Container, Toolbar, TextField, InputAdornment } from '@mui/material';
import useStyles from '../../styles/styledList';
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getActivity,deleteActivity } from '../../../redux/Activities/activitySlice'
import Delete from '@mui/icons-material/Delete'
import ModeEdit from '@mui/icons-material/ModeEdit'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sweetAlertConfirm } from '../../../Utils/sweetAlertConfirm'

  const ActivitiesList = () => {
  const location = useLocation()
  const path = location.pathname
  const classes = useStyles()
  const dispatch = useDispatch()
  const { activities, status } = useSelector((state) => state.activities)
  const history = useHistory()

  useEffect(() => {
      dispatch(getActivity())
    }, [])

  const handleDelete = async (id) => {
    const deleteIt = await sweetAlertConfirm()
    if (deleteIt) {
      dispatch(deleteActivity(id))
    }
  }

  useEffect(() => {
    if (status === 'deleted') {
      dispatch(getActivity())
    }
  }, [status])

  const orderedActivities = activities
  .slice()
  .sort((a, b) => b.created_at.localeCompare(a.created_at))

  const tableTitles = ['Nombre', 'Imagen', 'Fecha', 'Modificar', 'Eliminar']

  const debounceRef = useRef();

  const handleChange = (e) => {

    if(debounceRef.current){
      clearInterval(debounceRef.current);
    }

    if(e.target.value.length <= 2){
      debounceRef.current = setTimeout(() => {
        dispatch(getActivity());
      }, 300)
    }

    if(e.target.value.length >= 3){
      debounceRef.current = setTimeout(() => {
        dispatch(getActivity(`?search=${e.target.value}`));
      }, 300)
    }
  }

  return (
    <>
      <Toolbar></Toolbar>
      <Container className={classes.containerList}>
        <Box className={classes.containerButtonSearch}>
        <Box>
          <Link to={`${path}/create-activity`} className={classes.styleLink}>
            <Button color='secondary' variant='contained'>Crear Actividad</Button>
          </Link>
        </Box>
        <Box>
        <TextField
          label="Buscar actividad"
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

        <TableContainer component={Paper} className={classes.containerTable}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableRow}>
                {tableTitles.map((titles, key) => (
                  <TableCell key={key} align="center" className={classes.tableCell}>
                    {titles}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orderedActivities.map(({ name, image, created_at, id }) => (
                <TableRow key={id} className={classes.tableRow}>
                  <TableCell component="th" className={classes.tableCell}>
                    {name}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <img src={image} alt={name} className={classes.img} />
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {created_at}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Button
                      color="secondary"
                      sx={{ cursor: 'pointer' }}
                      onClick={() =>
                        history.push(`activities/edit-activity`, {
                          id: id,
                          path,
                        })
                      }
                    >
                      <ModeEdit />
                    </Button>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Button
                      color="secondary"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        handleDelete(id)
                      }}
                    >
                      <Delete />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )

}

export default ActivitiesList