import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../Logo/Logo";
import { useFormWithValidation } from "../../hooks/useForm";

function Register({ OnRegister }) {

  const { form, handleChange, errors, isValid, resetForm } = useFormWithValidation({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    OnRegister(form);
  }

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="content">
      <section className="registration">
        <Logo/>
        <h1 className="registration__heading">Добро пожаловать!</h1>
        <form className="registration-form" action="#" name="registration" onSubmit={handleSubmit} noValidate>
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
                onChange={handleChange}
                value={form.name || ''}
              />
              <span className="registration-form__error">{errors.name}</span>
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
                onChange={handleChange}
                value={form.email || ''}
              />
              <span className="registration-form__error">{errors.email}</span>
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
                onChange={handleChange}
                value={form.password || ''}
              />
              <span className="registration-form__error">{errors.password}</span>
            </div>
          </fieldset>
          <span className="registration-form__error"></span>
          <button
            className="registration-form__button"
            disabled={!isValid}
            type="submit"
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
