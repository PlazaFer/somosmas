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
import { Link } from "react-router-dom";
import useStyles from "../../styles/styledList";
import { useSelector, useDispatch } from 'react-redux'
import { selectAllTestimonials, selectTestimonialsStatus, getTestimonials, deleteTestimonials } from '../../../redux/Testimonials/testimonialsSlice'

function SlidesBackOffice() {
	const classes = useStyles();
    const testimonials = useSelector(selectAllTestimonials)
    const testimonialsStatus = useSelector(selectTestimonialsStatus)
	const dispatch = useDispatch()

	useEffect(() => {
		if(testimonialsStatus === 'idle' || testimonialsStatus === 'updated'){
			dispatch(getTestimonials())
		}
	}, [dispatch, testimonialsStatus]);

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
							{rowValues.map((rowName) => (
								<TableCell align="center" className={classes.tableCell}>
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
										component={Link}
										to={`/backoffice/testimonials/edit/${row.id}`}
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
										onClick={() => dispatch(deleteTestimonials(row.id))}
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
