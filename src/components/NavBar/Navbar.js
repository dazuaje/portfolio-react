import React from 'react';
import djLogo from '../../Assets/djLogo.svg';
import { Switch } from '@mui/material';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>

        <img className='nav__item--logo' src={djLogo} alt="djLogo" />

        <div className="nav__item__container">

          <li className='nav__item'><a href="#d" className="nav__item--anchor inicioLang"> Home </a></li>
          <li className='nav__item'><a href="#q" className="nav__item--anchor sobreLang"> About me </a></li>
          <li className='nav__item'><a href="#d" className="nav__item--anchor habilidadesLang"> Skills </a></li>
          <li className='nav__item'><a href="#c" className="nav__item--anchor proyectosLang"> Project </a></li>
          <li className='nav__item'><a href="#w" className="nav__item--anchor contactLang"> Contact </a></li>
        </div>

        <Switch defaultChecked style={{ color: '#374151' }} />
      </ul>

    </nav>
  )
}

export default Navbar;