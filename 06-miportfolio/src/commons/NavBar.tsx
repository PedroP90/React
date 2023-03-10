import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ComputerIcon from '@mui/icons-material/Computer';
import PeopleIcon from '@mui/icons-material/People';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { makeStyles } from '@material-ui/core';
import { Padding } from '@mui/icons-material';
import { borderColor, color } from '@mui/system';
import { yellow } from '@mui/material/colors';


export const NavBar = () => {
  const useStyle = makeStyles({
    miBoton:{
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      border: 10,
      padding: 10,
      height: 60,
      backgroundColor: 'orange',
    }
  })

 
  
  const estiloLocal = useStyle();
  return (
    <nav>
        
        <Link to='home'>
          <Button className={estiloLocal.miBoton} variant='contained'  startIcon={<HomeIcon/>}>
            Home
          </Button>
        </Link>
        <Link to='servicios'>
          <Button className={estiloLocal.miBoton} variant='contained'  startIcon={<DesignServicesIcon/>}>
            Servicios
          </Button>
        </Link>
        <Link to='formacion'>
          <Button color="primary" variant='contained' size="medium" startIcon={<SchoolIcon/>}>
            Formación
          </Button>
        </Link>
        <Link to='ordenadores'>
          <Button color="success" variant='contained' size="medium" startIcon={<ComputerIcon/>}>
            Ordenadores
          </Button>
        </Link>
        <Link to='qsomos'>
          <Button disabled color="primary" variant='contained' size="medium" startIcon={<PeopleIcon/>}>
            Quienes Somos
          </Button>
        </Link>
        <Link to='contacto'>
          <Button color="secondary" variant='contained' size="medium" startIcon={<ContactPageIcon/>}>
            Contacto
          </Button>
        </Link>
    </nav>
  )
}
