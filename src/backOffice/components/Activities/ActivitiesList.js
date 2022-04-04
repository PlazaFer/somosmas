import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button,
    Container, IconButton } from '@mui/material';
import useStyles from '../../styles/styledList';
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getActivity,deleteActivity } from '../../../redux/Activities/activitySlice'
import Delete from '@mui/icons-material/Delete'
import ModeEdit from '@mui/icons-material/ModeEdit'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sweetAlertConfirm } from '../../../Utils/sweetAlertConfirm'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
      <Container className={classes.containerList}>
        <Box className={classes.contLink}>
          <Link to={`${path}/create-activity`} className={classes.styleLink}>
            <Button color='secondary' variant='contained'>Crear Actividad</Button>
          </Link>
        </Box>

        <TableContainer component={Paper} className={classes.containerList}>
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