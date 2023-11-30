const MOVIES_URL = 'https://api.nomoreparties.co';

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

function amountInitialMovies(width) {
  let moviesAmount;
  if (width < 768) moviesAmount = 5;
  if (width >= 768) moviesAmount = 8;
  if (width >= 1280) moviesAmount = 12;
  return moviesAmount;
}

function amountAddedMovies(width) {
  let addAmount;
  if (width < 1280) addAmount = 2;
  if (width >= 1280) addAmount = 3;
  return addAmount;
}
export {moviesData, timeDuration, amountInitialMovies, amountAddedMovies, sortMovies};
