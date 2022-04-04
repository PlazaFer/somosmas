import React from 'react'
import { AppBar, IconButton, Toolbar, Box } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import useStyles from '../../styles/headerStyles'
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ setAbrir }) => {
    const classes = useStyles()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                color="inherit"
                position="fixed"
                sx={{ width: 'calc(100% - 180px', ml: '180px', }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        onClick={() => setAbrir()}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header