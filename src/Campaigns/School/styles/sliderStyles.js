import { makeStyles } from "@mui/styles";

// Styles
const useStyles = makeStyles((theme) => ({
	sliderContainer: {
		display: "flex",
	/* 	height: "500px", */
		color: "#fff",
		flexDirection: "column",
		width: "100%",
		
	},
	text: {
		width: "100%",
		alignItems: "center",
		height: "40px",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sliderImage: {
		objectFit: "cover",
		height: "100%",
		[theme.breakpoints.up("md")]: {
			height: "90%",
		},
	},
	centerItem: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100px",
	},
	arrows:{
		marginTop: '-50px',
	}
}));

export default useStyles;
