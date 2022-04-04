import { Container, Box, Hidden } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from "./Header"

const LayoutOficce = ({ children }) => {

    const [abrir,setAbrir] = useState(false)

    return (
        <Container sx={{ display: "flex" }}>
            <Header setAbrir={() => setAbrir(!abrir)} />
            <Hidden smDown > {/* en pantallas sm el sidebar se va ocultar */}
                <Sidebar variant="permanent" open={true} /> {/* el open es para abrir y cerrar el sidebar, por default esta en true */}
            </Hidden>
            <Hidden smUp>
                <Sidebar variant="temporary" open={abrir} onClose={() => setAbrir(!abrir)} /> {/* onCLose cerrar el sidebar */}
            </Hidden>
            <Box sx={{ width: 'calc(100% - 180px)' }}>
                {children}
            </Box>
        </Container>

    )
}

export default LayoutOficce