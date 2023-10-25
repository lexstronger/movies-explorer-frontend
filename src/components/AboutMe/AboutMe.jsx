import React from "react";
import "./AboutMe.css";
import myPhoto from '../../images/my-photo.jpg';

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__heading">Студент</h2>
      <div className="student__info">
        <div className="student__cv">
        <h3 className="student__name">Алексей</h3>
        <h4 className="student__job">Фронтенд-разработчик, 29 лет</h4>
        <p className="student__text">Я живу в городе Белгород, окончил экономический факультет, а также прошел несколько курсов по верстке и программированию. Долгое время работал по специальности и захотел сменить профессию. В ближайшее время хочу найти работу в IT. Люблю изучать английский язык, смотреть баскетбол и смотреть, как строки кода превращаются в целые сайты.</p>
        <a className='student__link' href='https://github.com/lexstronger' rel='noreferrer' target='_blank'>GitHub</a>
        </div>        
        <img className="student__photo" src={myPhoto} alt="Мое фото" />
      </div>
    </section>
  );
}

export default AboutMe;