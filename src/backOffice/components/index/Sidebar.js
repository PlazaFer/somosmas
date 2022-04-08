import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Drawer, Toolbar, List, ListItem, ListItemIcon, Hidden } from '@mui/material';
import useStyles from '../../styles/sideBarStyles';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CategoryIcon from '@mui/icons-material/Category';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Sidebar = ({ variant, open, onClose }) => {

  const classes = useStyles();

  const rutasMokeadas = [
    {
      name: "Actividad",
      link: "/backoffice/activities/create-activity",
      icon: <LocalActivityIcon color='secondary' />,
    },

    {
      name: "Categoría",
      link: "/backoffice/categories/create",
      icon: <CategoryIcon color='secondary' />,
    },
    {
      name: "Novedad",
      link: "/backoffice/news/create-news",
      icon: <NewspaperIcon color='secondary' />,
    },
    {
      name: "Slide",
      link: "/backoffice/slides/create",
      icon: <SlideshowIcon color='secondary' />,
    },
    {
      name: "Testimonio",
      link: "/backoffice/testimonials/create",
      icon: <SpeakerNotesIcon color='secondary' />,
    },
    {
      name: "Usuario",
      link: "/backoffice/users/create-user",
      icon: <PersonIcon color='secondary' />
    },
    {
      name: "Miembro",
      link: "/backoffice/members/create",
      icon: <PeopleAltIcon color='secondary' />,
    },
    {
        name: "Backoffice",
        link: "/backoffice",
        icon: <ArrowBackIcon color='secondary' />
    },
    {
      name: "ONG",
      link: "/",
      icon: <ExitToAppIcon color='secondary' />
    },
  ]

  return (
    <Drawer
      sx={{
        width: "180px",
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: "180px",
          boxSizing: 'border-box',
        },
      }}
      variant={variant}
      open={open}
      onClose={onClose ? onClose : null}
    >
      <Toolbar />
      <Divider />
      <List >
        {rutasMokeadas.map(({ name, link, icon }, index) => (
          <ListItem key={index} className={classes.listItem} >
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <Link key={index} to={link} className={classes.link}>{name}</Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
};


export default Sidebar;