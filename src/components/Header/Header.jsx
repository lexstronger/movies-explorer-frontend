import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/logo.svg"
import "./Header.css";
import Navigation from '../Navigation/Navigation';

function Header({LoggedIn, onBurgerClick}) {
  const location = useLocation();

  return (
      <header className={`header header_color_${
        location.pathname === '/' ? 'blue' : ''
      }`}>
        <Link className='header__logo-link' to="/">
          <img className='header__logo' src={logo} alt='Логотип сервиса' />
        </Link>
        <Navigation LoggedIn={LoggedIn} onBurgerClick={onBurgerClick}/>
      </header>
  );
}

export default Header;