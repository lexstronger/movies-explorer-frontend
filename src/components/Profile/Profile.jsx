import React, { useState } from "react";
import "./Profile.css";

function Profile({ handleLogout }) {
  const [isEdited, setIsEdited] = useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsEdited(!isEdited);
  }

  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__heading">Привет, Алексей!</h1>
        <form className="profile-form" action="#">
          <fieldset className="profile-form__fieldset">
            <div className="profile-form__container">
              <label className="profile-form__label">Имя</label>
              <input
                type="text"
                className="profile-form__input"
                id="profile-form__input-name"
                placeholder="Ваше имя"
                name="name"
                required
                disabled={isEdited}
                minLength="5"
                maxLength="30"
              />
            </div>
            <div className="profile-form__container">
              <label className="profile-form__label">E-mail</label>
              <input
                type="email"
                className="profile-form__input"
                id="profile-form__input-email"
                placeholder="Ваш E-mail"
                name="email"
                required
                disabled={isEdited}
                minLength="5"
                maxLength="30"
              />
            </div>
          </fieldset>
          {!isEdited && (
            <div className="profile__actions-container">
              <span className="profile-form__error">
                При обновлении профиля произошла ошибка.
              </span>
              <button
                className="profile__button profile__button-save"
                onClick={handleSubmit}
              >
                Сохранить
              </button>
            </div>
          )}
        </form>
        {isEdited && (
          <div className="profile__actions-container">
            <button className="profile__button" onClick={handleSubmit}>
              Редактировать
            </button>
            <button
              className="profile__button profile__button-exit"
              onClick={handleLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Profile;
