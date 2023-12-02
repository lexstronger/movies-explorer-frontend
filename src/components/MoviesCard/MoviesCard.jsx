import React from "react";
import { useLocation } from "react-router-dom";
import { timeDuration } from "../../utils/utils";
import "./MoviesCard.css";

function MoviesCard({movie, checkSaved, onLike, onDelete}) {
  const pathname = useLocation().pathname;
  const isSavedMovie = checkSaved ? checkSaved(movie) : true; 

  const movieLikeButtonClassName = `movie-card__button ${isSavedMovie ? "movie-card__button_save" : ""}`;
  console.log(isSavedMovie)
  // function handleLikeMovie() {
  //   !isSavedMovie && onLike(movie);
  // }

  // function handleDeleteMovie() {
  //   onDelete(movie);
  // }

  const handleLike = () => (!isSavedMovie ? onLike(movie) : onDelete(movie));
  return (
    <>
      <li className="movie-card">
        <div className="movie-card__description">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <p className="movie-card__duration">{timeDuration(movie.duration)}</p>
        </div>
        <a className="movie-card__image-link" href={movie.trailerLink} target='_blank' rel='noreferrer'>
          <img className="movie-card__image" src={movie.image} alt={movie.nameRU} />
        </a>
        {pathname === "/movies" ? (
          <button
           className={movieLikeButtonClassName}
            name="like" type="button"
             onClick={handleLike}
             >Сохранить</button>
        ) : (
          <button className="movie-card__button movie-card__button_delete" name="delete" type="button"
           onClick={handleLike}
           ></button>
        )}
      </li>
    </>
  );
}

export default MoviesCard;
