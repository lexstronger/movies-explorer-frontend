import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Logo.css";

function Logo() {
  return (
    <Link className='logo-link' to="/">
      <img className='logo-link__img' src={logo} alt='Логотип сервиса' />
    </Link>
  )
}

export default Logo;

