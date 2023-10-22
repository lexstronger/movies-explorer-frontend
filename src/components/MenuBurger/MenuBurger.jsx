import React from "react";
import { NavLink } from 'react-router-dom';
import "./MenuBurger.css";

function MenuBurger({isOpen, onClose}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <nav className="popup__container">
        <button
          className="popup__cross"
          type="button"
          aria-label="Закрыть попап"
          onClick={onClose}
        />
        <ul className="popup__links">
          <li className="popup__link-item">
            <NavLink className="popup__link" to="/">Главная</NavLink>
          </li>
          <li className="popup__link-item">
            <NavLink className="popup__link" to="/movies">Фильмы</NavLink>
          </li>
          <li className="popup__link-item">
            <NavLink className="popup__link" to="/saved-movies">Сохранённые фильмы</NavLink>
          </li>
          <li className="popup__link-item">
            <NavLink className="popup__link-profile" to="/profile">Аккаунт</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBurger;