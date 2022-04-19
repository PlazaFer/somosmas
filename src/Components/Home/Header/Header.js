import React, { useState } from "react";
import useStyles from "../styles/StyledHeader";
import { Appbar } from "./Appbar";
import { DrawerHome } from './DrawerHome';
import { AppbarResponsive } from './AppbarResponsive';
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesion } from "../../../redux/usersReducer/action";
import { useHistory } from "react-router-dom";


const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogin, rol_type } = useSelector((state) => state.auth);
  const [ open, setOpen ] = useState(false);


  const handleLogout = () => {
    dispatch(cerrarSesion());
    history.push("/");
  };

  return (
      <>
        <AppbarResponsive setOpen={setOpen} open={open}/>
        <DrawerHome open={open} setOpen={setOpen} handleLogout={handleLogout}/>
        <Appbar handleLogout={handleLogout} />
        </>
  );
};

export default Header;
