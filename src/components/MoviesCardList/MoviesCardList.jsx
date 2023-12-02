import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import useResize from "../../hooks/useResize";
import { quantityInitialMovies, quantityAddedMovies } from "../../utils/utils";

function MoviesCardList({sortedMovies, checkSaved, onLike, onDelete}) {

  const location = useLocation().pathname;
  const [quantityMovies, setQuantityMovies] = React.useState('');
  const [quantityAdded, setQuantityAdded] = React.useState('');
  const sizeWindow = useResize();
  const initialMovies = sortedMovies.slice(0, quantityMovies);

  React.useEffect(() => {
    setQuantityMovies(quantityInitialMovies(sizeWindow));
    setQuantityAdded(quantityAddedMovies(sizeWindow));
  }, [sizeWindow, sortedMovies]);

  function loadMoreCards() {
    setQuantityMovies(quantityMovies + quantityAdded);
  }
  return(
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {
        ((location === '/movies') ? initialMovies : sortedMovies).map((movie) =>(
        <MoviesCard key={movie.movieId || movie._id}
        movie={movie}
        image={movie.image}
        nameRU={movie.nameRU}
        duration={movie.duration}
        checkSaved={checkSaved}
        onDelete={onDelete}
        onLike={onLike}
        />
        ))
        }   
      </ul>
      {
      (sortedMovies.length > quantityMovies)
        &&
      <button className="movies__button" onClick={loadMoreCards}>Еще</button>}
    </section>
  );
}

export default MoviesCardList;