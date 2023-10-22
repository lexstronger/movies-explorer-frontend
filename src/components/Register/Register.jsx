import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";

function Register({ handleRegister }) {
  return (
    <main className="content">
      <section className="registration">
        <Link className="registration__logo-link" to="/">
          <img
            className="registration__logo"
            src={logo}
            alt="Логотип сервиса"
          />
        </Link>
        <h1 className="registration__heading">Добро пожаловать!</h1>
        <form className="registration-form" action="#" name="registration">
          <fieldset className="registration-form__fieldset">
            <div className="registration-form__container">
              <label className="registration-form__label">Имя</label>
              <input
                type="text"
                className="registration-form__input"
                id="registration-form__input-name"
                placeholder="Ваше имя"
                name="name"
                required
                minLength="5"
                maxLength="30"
              />
            </div>
            <div className="registration-form__container">
              <label className="registration-form__label">E-mail</label>
              <input
                type="email"
                className="registration-form__input"
                id="registration-form__input-email"
                placeholder="Ваш E-mail"
                name="email"
                required
                minLength="5"
                maxLength="30"
              />
            </div>
            <div className="registration-form__container">
              <label className="registration-form__label">Пароль</label>
              <input
                type="password"
                className="registration-form__input"
                id="registration-form__input-password"
                placeholder="Ваш пароль"
                name="password"
                required
                minLength="5"
                maxLength="30"
              />
            </div>
          </fieldset>
          <span className="registration-form__error"></span>
          <button
            className="registration-form__button"
            onClick={handleRegister}
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="registration__question-container">
          <p className="registration__question">Уже зарегистрированы?</p>
          <Link className="registration__question-link" to="/signin">
            Войти
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Register;
