import React from 'react';
import { useSelector } from 'react-redux';
import { headerData } from './config';
import { Link } from 'react-router-dom';
import { Drawer, Toolbar, List, ListItem } from '@mui/material';
import { useStyles } from './styles/drawerStyles';



export const DrawerHome = ({open, setOpen, handleLogout}) => {

    const { isLogin, rol_type } = useSelector((state) => state.auth);
    const classes = useStyles();

    const handleLogoutClose = () => {
        setOpen(false)
        handleLogout()
    }

    return(
        <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        className={classes.container}
        PaperProps={{
            sx: {
                width: {
                    xs: '100vw',
                    sm: "50vw",
                }
            }
        }}
    >
        <Toolbar></Toolbar>
            <List className={classes.list}> 
                {
                    headerData.map((Links) => (
                        <ListItem key={Links.name}>
                            <Link 
                            to={Links.url} 
                            className={classes.item}
                            onClick={() => setOpen(false)}
                            >
                              {Links.name}
                            </Link>
                        </ListItem>
                        ))
                }
                {!isLogin &&
                <>
                    <ListItem>
                        <Link
                            to='/login'
                            className={classes.item}
                            onClick={() => setOpen(false)}
                        >
                            Login
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            to='/register'
                            className={classes.item}
                            onClick={() => setOpen(false)}
                        >
                            Register
                        </Link>
                    </ListItem>
                </>
                }
                {isLogin && rol_type === 'Admin' &&
                    <ListItem>
                    <Link
                        to='/backoffice'
                        className={classes.item}
                        onClick={() => setOpen(false)}
                    >
                        Backoffice
                    </Link>
                </ListItem>
                }
                {isLogin &&
                    <ListItem>
                    <Link
                        to='/'
                        className={classes.item}
                        onClick={handleLogoutClose}
                    >
                        Logout
                    </Link>
                </ListItem>
                }
             </List>
    </Drawer>
    )
};