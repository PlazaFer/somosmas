import React from "react";
import useStyles from "./styles/footerStyles";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Newsletter from "./Newsletter";
import { useSelector } from "react-redux";
import Linkedin from "../../image/socialMediaIcons/linkedin.svg";
import Instagram from "../../image/socialMediaIcons/instagram.svg";
import Twitter from "../../image/socialMediaIcons/twitter.svg";
import Facebook from "../../image/socialMediaIcons/facebook.svg";

export default function Footer() {
	const { isLogin } = useSelector((state) => state.auth);

	const navigationItemsLeft = [
		{
			name: "Actividades",
			url: "/activities",
		},
		{
			name: "Novedades",
			url: "/news",
		},
	];

	const navigationItemsRight = [
		{
			name: "Contacto",
			url: "/contacto",
		},
		{
			name: "Nosotros",
			url: "/nosotros",
		},
	];

	const socialMediaItems = [
		{
			url: "https://facebook.com",
			icon: Facebook,
		},
		{
			url: "https://linkedin.com",
			icon: Linkedin,
		},
		{
			url: "https://instagram.com",
			icon: Instagram,
		},
		{
			url: "https://twitter.com",
			icon: Twitter,
		},
	];

	const classes = useStyles();

	return (
		<div className={classes.insideContainer}>
			{isLogin && <Newsletter />}
			<Box className={classes.footerContainer}>
				<Container>
					<Box className={classes.footer}>
						<Box>
							<ul className={classes.footerList}>
								{navigationItemsLeft.map(({ name, url }, index) => (
									<li key={index}>
										<NavLink className={classes.linkItemFooterList} to={url}>
											{name}
										</NavLink>
									</li>
								))}
							</ul>
						</Box>
						<Box component="img" src="images/logoSomosMas.png" alt="Logo somos mas" />
						<Box>
							<ul className={classes.footerList}>
								{navigationItemsRight.map(({ name, url }, index) => (
									<li key={index}>
										<NavLink className={classes.linkItemFooterList} to={url}>
											{name}
										</NavLink>
									</li>
								))}
							</ul>
						</Box>
					</Box>
					<hr />
					<Box className={classes.socialMediaList}>
						<ul className={classes.footerList}>
							{socialMediaItems.map(({ url, icon }, index) => (
								<li className={classes.socialMediaItem} key={index}>
									<a href={url} target='_BLANK' className={classes.socialMediaLinkItem}>
										<Box
											className={classes.socialMediaItemIcon}
											src={icon}
											alt="Social Media"
											component='img'
										/>
									</a>
								</li>
							))}
						</ul>
					</Box>
				</Container>
			</Box>
		</div>
	);
}
