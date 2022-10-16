import React from 'react';
import djLogo from '../../Assets/djLogo.svg';
import { Switch } from '@mui/material';
import { Link } from 'react-scroll';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>

        <img className='nav__item--logo' src={djLogo} alt="djLogo" />

        <div className="nav__item__container">

          <li className='nav__item'><Link className="nav__item--anchor inicioLang"> Home </Link></li>
          <li className='nav__item'><Link to="AboutMe" spy={true} smooth={true} offset={50} duration={500} className="nav__item--anchor sobreLang"> About me </Link></li>
          <li className='nav__item'><Link to="skills" spy={true} smooth={true} offset={50} duration={500} className="nav__item--anchor habilidadesLang"> Skills </Link></li>
          <li className='nav__item'><Link className="nav__item--anchor proyectosLang"> Project </Link></li>
          <li className='nav__item'><Link className="nav__item--anchor contactLang"> Contact </Link></li>
        </div>

        <Switch defaultChecked style={{ color: '#374151' }} />
      </ul>

    </nav>
  )
}

export default Navbar;