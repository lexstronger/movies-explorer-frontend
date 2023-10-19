import React from "react";
import "./MoviesCard.css";
import movie1 from "../../images/movie-1.png";
import movie2 from "../../images/movie-2.png";
import movie3 from "../../images/movie-3.png";

function MoviesCard() {
  return(
    <>
    <li className="movie-card">
      <div className="movie-card__description">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__duration">0ч 42м</p>
      </div>
      <img className="movie-card__image" src={movie1} alt="Кадр фильма" />
      <button className="movie-card__button">Сохранить</button>
    </li>
    <li className="movie-card">
    <div className="movie-card__description">
      <h2 className="movie-card__title">В погоне за Бенкси</h2>
      <p className="movie-card__duration">0ч 42м</p>
    </div>
    <img className="movie-card__image" src={movie2} alt="Кадр фильма" />
    <button className="movie-card__button">Сохранить</button>
  </li>
  <li className="movie-card">
      <div className="movie-card__description">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__duration">0ч 42м</p>
      </div>
      <img className="movie-card__image" src={movie3} alt="Кадр фильма" />
      <button className="movie-card__button">Сохранить</button>
    </li>
    <li className="movie-card">
      <div className="movie-card__description">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__duration">0ч 42м</p>
      </div>
      <img className="movie-card__image" src={movie1} alt="Кадр фильма" />
      <button className="movie-card__button">Сохранить</button>
    </li>
    <li className="movie-card">
      <div className="movie-card__description">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__duration">0ч 42м</p>
      </div>
      <img className="movie-card__image" src={movie2} alt="Кадр фильма" />
      <button className="movie-card__button">Сохранить</button>
    </li>
    <li className="movie-card">
      <div className="movie-card__description">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__duration">0ч 42м</p>
      </div>
      <img className="movie-card__image" src={movie3} alt="Кадр фильма" />
      <button className="movie-card__button">Сохранить</button>
    </li>
    <li className="movie-card">
      <div className="movie-card__description">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__duration">0ч 42м</p>
      </div>
      <img className="movie-card__image" src={movie1} alt="Кадр фильма" />
      <button className="movie-card__button">Сохранить</button>
    </li>
    <li className="movie-card">
      <div className="movie-card__description">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__duration">0ч 42м</p>
      </div>
      <img className="movie-card__image" src={movie2} alt="Кадр фильма" />
      <button className="movie-card__button">Сохранить</button>
    </li>
    <li className="movie-card">
      <div className="movie-card__description">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__duration">0ч 42м</p>
      </div>
      <img className="movie-card__image" src={movie3} alt="Кадр фильма" />
      <button className="movie-card__button">Сохранить</button>
    </li>
  </>
  );
}

export default MoviesCard;