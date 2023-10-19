import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return(
    <section className="movies-cards">
      <ul className="movies-cards__list">
        <MoviesCard/>
      </ul>
      <button className="movies-cards__button">Еще</button>
    </section>
  );
}

export default MoviesCardList;