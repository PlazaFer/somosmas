import React, { useState, useEffect } from "react";
import {
	Container,
	IconButton,
	TableBody,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Box,
	TableCell,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useHistory,useLocation } from "react-router-dom";
import useStyles from "../../styles/styledList";
import { useSelector, useDispatch } from 'react-redux'
import {getTestimonials,deleteTestimonials} from "../../../redux/Testimonials/testimonialsSlice";
import {sweetAlertConfirm} from "../../../Utils/sweetAlertConfirm"

function SlidesBackOffice() {
	const classes = useStyles();
    const {testimonials,status} = useSelector(state => state.testimonials)
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()
	const path = location.pathname

	useEffect(() => {
		dispatch(getTestimonials())
	}, []);

	const handleDelete = async(id) => {
		const deleteIt = await sweetAlertConfirm()
		if(deleteIt){
			dispatch(deleteTestimonials(id))
		}
	}

	useEffect(()=>{
		if(status === "deleted"){
			dispatch(getTestimonials())
		}
	},[status])

	const rowValues = ['Titulo', 'Imágen', 'Descripción', 'Editar', 'Eliminar']

	return (
		<Container className={classes.containerList}>
			<Box className={classes.contLink}>
				<Link
					exact
					className={classes.styleLink}
					to="/backoffice/testimonials/create">
					Crear un nuevo testimonio
				</Link>
			</Box>

			<TableContainer component={Paper} className={classes.containerList}>
				<Table>
					<TableHead>
						<TableRow>
							{rowValues.map((rowName,index) => (
								<TableCell align="center" className={classes.tableCell} key={index}>
									{rowName}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{testimonials.map((row) => (
							<TableRow className={classes.tableRow} key={row.id}>
								<TableCell
									align="center"
									className={classes.tableCell}
									component="th"
									scope="row">
									{row.name}
								</TableCell>
								<TableCell align="center">
									<img
										src={row.image}
										alt={row.name}
										className={classes.img}
									/>
								</TableCell>
								<TableCell
									align="center"
									className={classes.tableCell}
									>
									{row.description}
								</TableCell>
								<TableCell
									align="center"
									className={classes.tableCell}
									>
									<IconButton
										onClick={()=>history.push(`/backoffice/testimonials/edit`,{
											id: row.id,
											path
										})}
										component={Link}
										variant="outlined"
										color="secondary">
										<EditIcon />
									</IconButton>
								</TableCell>
								<TableCell
									align="center"
									className={classes.tableCell}
									>
									<IconButton
										onClick={() => handleDelete(row.id)}
										color="secondary"
										sx={{ cursor: "pointer" }}>
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
