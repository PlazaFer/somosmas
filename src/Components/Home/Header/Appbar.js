import { useState } from "react";
import { useSelector } from "react-redux";
import { headerData } from "./config";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles/appbarStyles";

export const Appbar = ({ handleLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const { isLogin, rol_type } = useSelector((state) => state.auth);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
              {headerData.map((links) => (
                <NavLink
                  key={links.name}
                  to={links.url}
                  className={classes.link}
                >
                  {links.name}
                </NavLink>
              ))}
              <p
                id="button"
                aria-controls={open ? "menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className={classes.link}
              >
                Campañas
              </p>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to='/school-campaign'
                    className={classes.menuLink}
                  >
                    Campaña escuela
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to='/Toys-campaign'
                    className={classes.menuLink}
                  >
                    Campaña juguetes
                  </NavLink>
                </MenuItem>
              </Menu>
              <NavLink
                    to='/donation'
                    className={classes.link}
                  >
                    Contribuir
                  </NavLink>
            </Box>
          </Box>
          <Box className={classes.buttonsContainer}>
            {!isLogin && (
              <>
                <NavLink to="/login" className={classes.buttonLink}>
                  <Button size="small" color="secondary" variant="contained">
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/register" className={classes.buttonLink}>
                  <Button size="small" color="secondary" variant="contained">
                    Register
                  </Button>
                </NavLink>
              </>
            )}
            {isLogin && rol_type === "Admin" && (
              <NavLink to="/backoffice" className={classes.buttonLink}>
                <Button variant="contained" size="small" color="secondary">
                  Backoffice
                </Button>
              </NavLink>
            )}
            {isLogin && (
              <NavLink className={classes.buttonLink} to="/">
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </NavLink>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
