import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Header.css";
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header({LoggedIn, onBurgerClick}) {
  const location = useLocation();

  return (
      <header className={`header header_color_${
        location.pathname === '/' ? 'blue' : ''
      }`}>        
        <Logo/>
        <Navigation LoggedIn={LoggedIn} onBurgerClick={onBurgerClick}/>
      </header>
  );
}

export default Header;