import React, { useState } from "react";
import { useFormWithValidation } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";

function Profile({ onEdit, handleLogout }) {
  const [isEdited, setIsEdited] = useState(true);
  const currentUser = React.useContext(CurrentUserContext);

  const { form, handleChange, errors, isValid, resetForm } = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  });  

  function handleSubmit(evt) {
    evt.preventDefault();
    onEdit(form)
      .then(() => {
        setIsEdited(true);
      })
  }

  React.useEffect(() => {
    resetForm({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser, resetForm]);

  console.log(currentUser.name);
  console.log(currentUser.email);

  function handleEdit(evt) {
    evt.preventDefault();
    setIsEdited(false);
  } 

  const notIdenticInputs = form.name !== currentUser.name || form.email !== currentUser.email;
  
  console.log(form.name);
  console.log(form.email);

  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__heading">Привет, {currentUser.name}!</h1>
        <form className="profile-form" action="#" onSubmit={handleSubmit} noValidate>
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
                onChange={handleChange}
                value={form.name || ''}
              />              
            </div>
            <span className="profile-form__input-error">{errors.name}</span>
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
                onChange={handleChange}
                value={form.email || ''}
              />              
            </div>
            <span className="profile-form__input-error">{errors.email}</span>
          </fieldset>
          {!isEdited && (
            <div className="profile__actions-container">
              {/* <span className="profile-form__error">
                {serverResponse}
              </span> */}
              <button
                className="profile__button profile__button-save"
                disabled={!isValid || !notIdenticInputs}
              >
                Сохранить
              </button>
            </div>
          )}
          {isEdited && (
          <div className="profile__actions-container">
            {/* <span className="profile-form__error profile-form__error_success">
                {serverResponse}
              </span> */}
            <button className="profile__button"
              onClick={handleEdit}
            >
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
        </form>
        
      </section>
    </main>
  );
}

export default Profile;
