import { MOVIES_URL, SCREEN_SIZE, TIME_SHORTMOVIES, QUANTITY_MOVIES, QUANTITY_ADDED_MOVIES } from "./constants";


function sortMovies(movies, keyword, isShort) {
  const searchByWord = (word) => {
    return word.toLowerCase().includes(keyword.toLowerCase())
  }

  const sortedMoviesByKeyword = movies.filter((movie) => {
    return searchByWord(movie.nameRU) || searchByWord(movie.nameEN);
  })

  if (isShort) {
    const shortMovies = sortedMoviesByKeyword.filter((movie) => {
      return movie.duration <= TIME_SHORTMOVIES;
    })
    return shortMovies;
  } else {
    return sortedMoviesByKeyword;
  }
}

function timeDuration(time) {
  return `${Math.floor(time / 60)}ч ${time % 60}м`;
}

function quantityInitialMovies(width) {
  let quantityMovies;
  if (width < SCREEN_SIZE.SMALL) quantityMovies = QUANTITY_MOVIES.MIN;
  if (width >= SCREEN_SIZE.SMALL) quantityMovies = QUANTITY_MOVIES.MED;
  if (width >= SCREEN_SIZE.BIG) quantityMovies = QUANTITY_MOVIES.MAX;
  return quantityMovies;
}

function quantityAddedMovies(width) {
  let quantityAdded;
  if (width < SCREEN_SIZE.BIG) quantityAdded = QUANTITY_ADDED_MOVIES.FEW;
  if (width >= SCREEN_SIZE.BIG) quantityAdded = QUANTITY_ADDED_MOVIES.MANY;
  return quantityAdded;
}

function moviesData(movies) {
  return movies.map((movie) => {
    return {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${MOVIES_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }
  })
}
export {timeDuration, quantityInitialMovies, quantityAddedMovies, sortMovies, moviesData, };
