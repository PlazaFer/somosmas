import React from 'react'
import { useStyles } from './FooterStyles'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from 'react-router-dom'

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.styleFlex}>
        <img src="/Images/LOGO-SOMOS MAS.png" alt="" className={classes.logo} />
        <Link to="/Home" className={classes.a_Home}>
          <Typography variant="subtitle1" className={classes.typographyHom}>
            Somos más
          </Typography>
        </Link>
      </div>
      <div className={classes.styleFlex}>
        <a href="https://es-la.facebook.com" target="_blank" rel="noreferrer">
          <FacebookIcon
            color="secondary"
            fontSize="large"
            className={classes.icon}
          />
        </a>
        <a
          href="https://es-la.facebook.com"
          target="_blank"
          rel="noreferrer"
          className={classes.a_Redes}
        >
          <Typography variant="subtitle1" className={classes.typographyFb}>
            Facebook
          </Typography>
        </a>
      </div>
      <div className={classes.styleFlex}>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <InstagramIcon
            fontSize="large"
            color="primary"
            className={classes.icon}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className={classes.a_Redes}
        >
          <Typography variant="subtitle1" className={classes.typographyIg}>
            Instagram
          </Typography>
        </a>
      </div>

      <Link to="/toys-campaign" className={classes.a_Campaings}>
        <Typography variant="subtitle1" className={classes.typographyRedes}>
          Toys Campaign
        </Typography>
      </Link>
      <Link to="/" className={classes.a_Campaings}>
        <Typography variant="subtitle1" className={classes.typographyRedes}>
          Inicio
        </Typography>
      </Link>
    </div>
  )
}

export default Footer
