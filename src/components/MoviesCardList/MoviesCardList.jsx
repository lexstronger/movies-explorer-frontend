import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({sortedMovies}) {

  return(
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {
        sortedMovies.map((movie) =>(
        <MoviesCard key={movie.movieId || movie._id}
        movie={movie}
        image={movie.image}
        nameRU={movie.nameRU}
        duration={movie.duration}
        />
        ))
        }   
      </ul>
    </section>
  );
}

export default MoviesCardList;