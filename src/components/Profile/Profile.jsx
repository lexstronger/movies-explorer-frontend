import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__heading">Привет, Алексей!</h2>
      <form className="profile-form" action="#">
        <fieldset className="profile-form__fieldset">
          <div className="profile-form__container">
            <label className="profile-form__label">Имя</label>
            <input type="text" className="profile-form__input" id="profile-form__input-name" name="name" required minLength="5" maxLength="30"/>
          </div>
          <div className="profile-form__container">
            <label className="profile-form__label">E-mail</label>
            <input type="email" className="profile-form__input" id="profile-form__input-email" name="email" required minLength="5" maxLength="30" />
          </div>
        </fieldset>
        <span className="profile-form__error"></span>
      </form>
      <div className="profile__actions-container">
        <button className="profile__button">Редактировать</button>
        <button className="profile__button profile__button_red">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;