import { useRef } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Paper,
  Button,
  Container,
  IconButton
} from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import ModeEdit from '@mui/icons-material/ModeEdit'
import { useEffect } from 'react'
import useStyles from '../../styles/styledList'
import { useSelector, useDispatch } from 'react-redux'
import {
  getNews,
  deleteNews,
} from '../../../redux/NewsReducers/newsReducerThunk'
import { sweetAlertConfirm } from '../../../Utils/sweetAlertConfirm'
import { sweetAlertMixin } from '../../../Utils/AlertState'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewsList = () => {
  const location = useLocation()
  const path = location.pathname
  const classes = useStyles()
  const dispatch = useDispatch()
  const { news, status } = useSelector((state) => state.news)
  const history = useHistory()

  useEffect(() => {
    dispatch(getNews())
  }, [])

  const handleDelete = async (id) => {
    const deleteIt = await sweetAlertConfirm()
    if (deleteIt) {
      dispatch(deleteNews(id))
    }
    console.log(id)
  }

  useEffect(() => {
    if (status === 'deleted') {
      dispatch(getNews())
    }
  }, [status])

  const orderedNews = news
    .slice()
    .sort((a, b) => b.created_at.localeCompare(a.created_at))

  const tableTitles = ['Nombre', 'Imagen', 'Fecha', 'Modificar', 'Eliminar']

  const debounceRef = useRef();

  const handleChange = (e) => {

    if(debounceRef.current){
      clearInterval(debounceRef.current);
    }

    if(e.target.value.length > 0 && e.target.value.length <= 2){
      debounceRef.current = setTimeout(() => {
        if(e.target.value >= 3) return
        console.log('debounce menor a 3', e.target.value)
      }, 1000)
    }

    if(e.target.value.length >= 3){
      debounceRef.current = setTimeout(() => {
        console.log('debounce 3:', e.target.value)
        return
      }, 1000)
    }
  }

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
          <Link to={`${path}/create-news`} className={classes.styleLink}>
            <Button color='secondary' variant='contained'>Crear Novedad</Button>
          </Link>
        </Box>
        <Box>
          <input 
            type='text'
            name='search'
            placeholder='Buscar Novedad'
            onChange={handleChange}
          />
        </Box>

        <TableContainer component={Paper} className={classes.containerList}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableRow}>
                {tableTitles.map((titles, key) => (
                  <TableCell align="center" className={classes.tableCell}>
                    {titles}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orderedNews.map(({ name, image, created_at, id }) => (
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
                        history.push(`news/edit-news`, {
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

export default NewsList
