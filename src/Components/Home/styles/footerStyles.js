import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	footerContainer: {
		backgroundColor: "#f5f5f5",
    	borderTop: 'solid 1px #dfdfdf',
		// width: '100%',
		// position: 'absolute',
		// bottom: 0,
		
	},
	insideContainer:{
		marginTop: '0px',
	},
	footer: {
		display: "flex",
		justifyContent: "space-evenly",
		flexDirection: "column",
		alignItems: "center",
		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
		},
	},
	logoContainer: {
		display: "flex",
		alignItems: "center",
	},
	logoText: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	footerList: {
		listStyle: "none",
		padding: "0",
		textAlign: "center",
		display: 'flex',
    	gap: '18px',
	},
	linkItemFooterList: {
		textDecoration: "none",
		color: '#000'
	},
	footerListTitle: {
		textDecoration: "underline",
		fontWeight: "500",
	},
	itemsContainer: {
		display: "flex",
		justifyContent: "space-evenly",
		width: "50%",

		flexDirection: "column",
		alignItems: "center",

		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
			alignItems: "flex-start",
		},
	},
	socialMediaItemIcon: {
		width: '25px',
		height: '25px',
		padding: '15px',
		margin: 'auto',
	},
	socialMediaItem: {
		backgroundColor: '#fff',
		borderRadius: '32px',
		width: '50px',
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	socialMediaList: {
		display: 'flex',
		justifyContent: 'center',
	},
	socialMediaLinkItem: {
		textDecoration: 'none',
	}
}));

export default useStyles;
