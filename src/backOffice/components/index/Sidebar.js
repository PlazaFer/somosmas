import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, Divider, Typography, Box, Toolbar } from '@mui/material';
import useStyles from '../../styles/sideBarStyles';




const Sidebar = ({ open }) => {

    const classes = useStyles();

    const rutasMokeadas = [
        {
            name: "Crear Actividad",
            link: "/backoffice/activities/create-activity"
        },

        {
            name: "Crear Categoría",
            link: "/backoffice/categories/create"
        },
        {
            name: "Crear Novedad",
            link: "/backoffice/news/create-news"
        },
        {
            name: "Crear Slide",
            link: "/backoffice/slides/create"
        },
        {
            name: "Crear Testimonio",
            link: "/backoffice/testimonials/create"
        },
        {
            name: "Crear Usuario",
            link: "/backoffice/users/create-user"
        },
        {
            name: "Crear Miembro",
            link: "/backoffice/members/create"
        },
        // {
        //     name: "Crear Proyecto",
        //     link: "/backoffice/create-project`"
        // },
        {
            name: "Volver a la ONG",
            link: "/"
        },
    ]

    return (

        <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            PaperProps={{
                sx: {
                    width: {
                        xs: '100vw',
                        sm: "100vw",
                        md: "30vw",
                        xl: "20vw"
                    }
                }
            }}
        >
            <Toolbar></Toolbar>
            <Box>
                <Box className={classes.containerText}>
                    <img src="/images/LOGO-SOMOS-MAS.png" alt='Logo Ong' className={classes.logoOng} />
                    <Typography variant='h6' className={classes.headerText}>Somos Mas</Typography>
                </Box>
            </Box>
            <Divider variant="middle" />
                <List> 
                    {
                        rutasMokeadas.map((element, index) => (
                            <ListItem key={index}>
                                <Link key={index} to={element.link} className={classes.item}>{element.name}</Link>
                            </ListItem>
                            ))
                    }
                 </List>
        </Drawer>
    )
};


export default Sidebar;