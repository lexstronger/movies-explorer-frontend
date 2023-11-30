const MOVIES_URL = 'https://api.nomoreparties.co';

function sortMovies(movies, keyword, isShort) {
  const searchByWord = (word) => {
    return word.toLowerCase().includes(keyword.toLowerCase())
  }

  const sortedMoviesByKeyword = movies.filter((movie) => {
    return searchByWord(movie.nameRU) || searchByWord(movie.nameEN);
  })

  if (isShort) {
    const shortMovies = sortedMoviesByKeyword.filter((movie) => {
      return movie.duration <= 40;
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
  if (width < 480) quantityMovies = 5;
  if (width >= 480) quantityMovies = 8;
  if (width >= 800) quantityMovies = 12;
  return quantityMovies;
}

function quantityAddedMovies(width) {
  let quantityAdded;
  if (width < 800) quantityAdded = 2;
  if (width >= 800) quantityAdded = 3;
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
