import React from "react";
import "./Promo.css";
import promoImage from "../../images/promo-logo.svg";

function Promo({scrollDown}) {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__textarea">
          <h2 className="promo__heading">Учебный проект студента факультета Веб&#8209;разработки.</h2>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className="promo__button" type='button' onClick={scrollDown}>Узнать больше</button>
        </div>
        <img className="promo__image" src={promoImage} alt="Логотип сайта" />
      </div>
    </section>
  );
}

export default Promo;