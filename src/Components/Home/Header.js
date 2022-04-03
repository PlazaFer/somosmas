import * as React from "react";
import {AppBar, Box, Toolbar, IconButton, Typography, Drawer, Divider, List, ListItem, Button} from "@mui/material";
import { NavLink } from "react-router-dom";
import useStyles from "./styles/StyledHeader";
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesion } from "../../redux/usersReducer/action";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogin, rol_type } = useSelector((state) => state.auth);
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const headerData = [
    {
      name: "Inicio",
      url: "/"
    },
    {
      name: "Nosotros",
      url: "/nosotros"
    },
    {
      name: "Contacto",
      url: "/contacto"
    },
    {
      name: "School-Campaign",
      url: "/school-campaign",
    },
    {
      name: "Toys-campaign",
      url: "/toys-campaign",
    },
    {
      name: "Contribuir",
      url: "/donation"
    },
  ];

  const handleClick = () => {
    dispatch(cerrarSesion());
    history.push("/");
  };

  return (
    // AppBar Mobile

    // Appbar Desktop
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Box className={classes.container}>
          <Box className={classes.subContainer}>
            <Box className={classes.containerLogo}>
              <img
                src="/Images/LOGO-SOMOS MAS.png"
                alt=""
                className={classes.logosm}
              />
            </Box>
            <Box className={classes.linksContainer}>
              {
                headerData.map((links) => (
                <NavLink key={links.name} to={links.url} className={classes.link}>
                  {links.name}
                </NavLink>
                ))
              }
            </Box>
            </Box>
          <Box className={classes.buttonsContainer}>
            <NavLink to="/login" className={classes.buttonLink}>
              <Button size="small" color="info" variant="contained">
                Login
              </Button>
            </NavLink>
            <NavLink to="/register" className={classes.buttonLink}>
              <Button size="small" color="info" variant="contained">
                Register
              </Button>
            </NavLink>
        </Box>
        </Box>
      </Toolbar>
    </AppBar>

    /*
<Box className={classes.linksContainer}>
    <NavLink to='/' className={classes.link}>
      Inicio
    </NavLink>
    <NavLink to='/nosotros' className={classes.link}>
      Nosotros
    </NavLink>
    <NavLink to='/contacto' className={classes.link}>
      Contacto
    </NavLink>
    <NavLink to='/school-campaing' className={classes.link}>
      School-Campaing
    </NavLink>
    <NavLink to='/toys-campaing' className={classes.link}>
      Toys-Campaing
    </NavLink>
    <NavLink to='/donation' className={classes.link}>
      Contribuir
    </NavLink>
</Box>
</Box> */

    // <AppBar position="static" className={classes.appbar}>
    //   <Toolbar disableGutters>
    //     <Box className={classes.styledBoxSm}>
    //       <IconButton
    //         aria-label="account of current user"
    //         aria-controls="menu-appbar"
    //         aria-haspopup="true"
    //         onClick={handleOpenNavMenu}
    //         color="default"
    //       >
    //         <MenuIcon className={classes.icon} />
    //       </IconButton>
    //       <Menu
    //         id="menu-appbar"
    //         anchorEl={anchorElNav}
    //         anchorOrigin={{
    //           vertical: 'bottom',
    //           horizontal: 'left',
    //         }}
    //         keepMounted
    //         transformOrigin={{
    //           vertical: 'top',
    //           horizontal: 'left',
    //         }}
    //         open={Boolean(anchorElNav)}
    //         onClose={handleCloseNavMenu}
    //         sx={{
    //           display: { xs: 'block', md: 'none' },
    //         }}
    //       >
    //         <MenuItem>
    //           <NavLink to="/" className={classes.links}>
    //             <Typography
    //               variant="subtitle1"
    //               className={classes.typographyLinks}
    //             >
    //               Inicio
    //             </Typography>
    //           </NavLink>
    //         </MenuItem>
    //         <MenuItem>
    //           <NavLink to="/Nosotros" className={classes.links}>
    //             <Typography
    //               variant="subtitle1"
    //               className={classes.typographyLinks}
    //             >
    //               Nosotros
    //             </Typography>
    //           </NavLink>
    //         </MenuItem>
    //         {isLogin && rol_type === 'Admin' ? null : (
    //           <MenuItem>
    //             <NavLink to="/Contacto" className={classes.links}>
    //               <Typography
    //                 variant="subtitle1"
    //                 className={classes.typographyLinks}
    //               >
    //                 Contacto
    //               </Typography>
    //             </NavLink>
    //           </MenuItem>
    //         )}
    //         {headerData.map((value, i) => (
    //           <MenuItem key={i} onClick={handleCloseNavMenu}>
    //             <NavLink to={value.url} className={classes.links}>
    //               <Typography
    //                 textAlign="center"
    //                 className={classes.typographyLinks}
    //               >
    //                 {value.name}
    //               </Typography>
    //             </NavLink>
    //           </MenuItem>
    //         ))}
    //         {!isLogin && (
    //           <div>
    //             <MenuItem>
    //               <NavLink to="/login" className={classes.links}>
    //                 <Typography>Login</Typography>
    //               </NavLink>
    //             </MenuItem>
    //             <MenuItem>
    //               <NavLink to="/register" className={classes.links}>
    //                 <Typography>Registrarte</Typography>
    //               </NavLink>
    //             </MenuItem>
    //           </div>
    //         )}
    //         {isLogin && rol_type === 'Admin' && (
    //           <MenuItem>
    //             <NavLink to="/backoffice" className={classes.links}>
    //               <Typography color="secondary">Backoffice</Typography>
    //             </NavLink>
    //           </MenuItem>
    //         )}
    //         {isLogin && (
    //           <NavLink to="/" className={classes.links}>
    //             <Button
    //               className={classes.button}
    //               onClick={handleClick}
    //               color="secondary"
    //             >
    //               Log out
    //             </Button>
    //           </NavLink>
    //         )}
    //         {isLogin && rol_type === 'Standard' && (
    //           <NavLink to="/donation" className={classes.links}>
    //             <Button className={classes.button} color="primary">
    //               Donar
    //             </Button>
    //           </NavLink>
    //         )}
    //       </Menu>
    //       <img
    //         src="/Images/LOGO-SOMOS MAS.png"
    //         alt=""
    //         className={classes.logosx}
    //       />
    //     </Box>

    //     <Box>
    //       <img
    //         src="/Images/LOGO-SOMOS MAS.png"
    //         alt=""
    //         className={classes.logosm}
    //       />
    //     </Box>
    //     <Box className={classes.styledBoxMd}>
    //       <Box className={classes.boxLink}>
    //         <NavLink
    //           exact
    //           to="/"
    //           className={classes.links}
    //           activeClassName={classes.active}
    //         >
    //           <Typography
    //             variant="subtitle1"
    //             className={classes.typographyLinks}
    //           >
    //             Inicio
    //           </Typography>
    //         </NavLink>

    //         <NavLink
    //           to="/Nosotros"
    //           className={classes.links}
    //           activeClassName={classes.active}
    //         >
    //           <Typography
    //             variant="subtitle1"
    //             className={classes.typographyLinks}
    //           >
    //             Nosotros
    //           </Typography>
    //         </NavLink>

    //         {isLogin && rol_type === 'Admin' ? null : (
    //           <NavLink
    //             to="/Contacto"
    //             className={classes.links}
    //             activeClassName={classes.active}
    //           >
    //             <Typography
    //               variant="subtitle1"
    //               className={classes.typographyLinks}
    //             >
    //               Contacto
    //             </Typography>
    //           </NavLink>
    //         )}

    //         {headerData.map((value, i) => (
    //           <NavLink
    //             key={i}
    //             to={value.url}
    //             className={classes.links}
    //             activeClassName={classes.active}
    //           >
    //             <Typography
    //               variant="subtitle1"
    //               className={classes.typographyLinks}
    //             >
    //               {value.name}
    //             </Typography>
    //           </NavLink>
    //         ))}

    //         {!isLogin && (
    //           <div>
    //             <NavLink to="/login" className={classes.links}>
    //               <Button
    //                 variant="contained"
    //                 size="small"
    //                 color="secondary"
    //                 className={classes.button}
    //               >
    //                 Login
    //               </Button>
    //             </NavLink>
    //             <NavLink to="/register" className={classes.links}>
    //               <Button
    //                 variant="outlined"
    //                 color="secondary"
    //                 size="small"
    //                 className={classes.button}
    //               >
    //                 Registrate
    //               </Button>
    //             </NavLink>
    //           </div>
    //         )}

    //         {isLogin && rol_type === 'Admin' && (
    //           <NavLink to="/backoffice" className={classes.links}>
    //             <Button
    //               className={classes.button}
    //               variant="contained"
    //               size="small"
    //               color="secondary"
    //             >
    //               Backoffice
    //             </Button>
    //           </NavLink>
    //         )}

    //         {isLogin && (
    //           <NavLink to="/" className={classes.links}>
    //             <Button
    //               className={classes.button}
    //               onClick={handleClick}
    //               variant="outlined"
    //               color="secondary"
    //               size="small"
    //             >
    //               Logout
    //             </Button>
    //           </NavLink>
    //         )}

    //         {isLogin && rol_type === 'Standard' && (
    //           <NavLink to="/donation" className={classes.links}>
    //             <Button
    //               className={classes.button}
    //               variant="contained"
    //               color="primary"
    //               size="small"
    //             >
    //               Donar
    //             </Button>
    //           </NavLink>
    //         )}
    //       </Box>
    //     </Box>
    //   </Toolbar>
    // </AppBar>
  );
};

export default Header;
