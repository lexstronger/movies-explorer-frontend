import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login({ handleLogin }) {
  return (
    <main className="content">
      <section className="login">
        <Link className="login__logo-link" to="/">
          <img className="login__logo" src={logo} alt="Логотип сервиса" />
        </Link>
        <h1 className="login__heading">Рады видеть!</h1>
        <form className="login-form" action="#" name="login">
          <fieldset className="login-form__fieldset">
            <div className="login-form__container">
              <label className="login-form__label">E-mail</label>
              <input
                type="email"
                className="login-form__input"
                id="login-form__input-email"
                placeholder="Ваш E-mail"
                name="email"
                required
                minLength="5"
                maxLength="30"
              />
            </div>
            <div className="login-form__container">
              <label className="login-form__label">Пароль</label>
              <input
                type="password"
                className="login-form__input"
                id="login-form__input-password"
                placeholder="Ваш пароль"
                name="password"
                required
                minLength="5"
                maxLength="30"
              />
            </div>
          </fieldset>
          <span className="login-form__error"></span>
          <button className="login-form__button" onClick={handleLogin}>
            Войти
          </button>
        </form>
        <div className="login__question-container">
          <p className="login__question">Ещё не зарегистрированы?</p>
          <Link className="login__question-link" to="/signup">
            Регистрация
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;
