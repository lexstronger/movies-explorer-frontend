import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ LoggedIn, handleLogin, onBurgerClick }) {
  return (
    <>
      {!LoggedIn ? (
        <nav className="navigation">
          <Link className="navigation__link" to="/signup">
            Регистрация
          </Link>
          <Link
            className="navigation__link navigation__link_active"
            to="/signin"
            onClick={handleLogin}
          >
            Войти
          </Link>
        </nav>
      ) : (
        <>
          <nav className="navigation">
            <NavLink
              className="navigation__link navigation__link_type_films"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="navigation__link navigation__link_type_films"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
            <NavLink
              className="navigation__link navigation__link_type_account"
              to="/profile"
            >
              Аккаунт
            </NavLink>
            <button
              className="navigation__menu"
              type="button"
              onClick={onBurgerClick}
            ></button>
          </nav>
        </>
      )}
    </>
  );
}

export default Navigation;
