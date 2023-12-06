import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../Logo/Logo";
import { useFormWithValidation } from "../../hooks/useForm";

function Login({ onLogin }) {
  const { form, handleChange, errors, isValid, resetForm } = useFormWithValidation({
    email: '',
    password: '',
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(form);
  }

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="content">
      <section className="login">
        <Logo/>
        <h1 className="login__heading">Рады видеть!</h1>
        <form className="login-form" action="#" name="login" onSubmit={handleSubmit} noValidate>
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
                onChange={handleChange}
                value={form.email || ''}
              />
              <span className="login-form__error">{errors.email}</span>
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
                onChange={handleChange}
                value={form.password || ''}
              />
              <span className="login-form__error">{errors.password}</span>
            </div>
          </fieldset>
          <span className="login-form__error"></span>
          <button className="login-form__button" type="submit" disabled={!isValid}>
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
