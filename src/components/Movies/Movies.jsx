import React from "react";
import { useLocation } from "react-router-dom";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useFormWithValidation } from "../../hooks/useForm";
import { sortMovies } from "../../utils/utils";

function Movies({movies, getFilms}) {
  const location = useLocation().pathname;
  const [sortedMovies, setSortedMovies] = React.useState(recoverPreviousSearch().sortedMovies);
  
  const { form, handleChange } = useFormWithValidation(recoverPreviousSearch().form);

  React.useEffect(() => {
    if (movies.length === 0 && getFilms) {
      return;
    }
    setSortedMovies(sortMovies(movies, form.keyword, form.checkbox));
  }, [movies, form.checkbox, getFilms, form.keyword]);

  function searchFilms (keyword, isShort) {
    if (movies.length === 0 && getFilms) {
      getFilms();
    } else {
      setSortedMovies(sortMovies(movies, keyword, isShort));
    }
  }

  React.useEffect(() => {
    if (location !== '/movies') return;
    localStorage.setItem('previousSearch', JSON.stringify({
      sortedMovies,
      form,
    }));
  }, [sortedMovies, form.checkbox, location, form]);

  function recoverPreviousSearch() {
    if (location !== '/movies') return {
      form: {
        keyword: '',
        checkbox: false,
      },
      sortedMovies: [],      
    };
    const previousSearch = JSON.parse(localStorage.getItem('previousSearch'));
    if (!previousSearch) return {
      form: {
        keyword: '',
        checkbox: false,
      },
      sortedMovies: [],      
    };
    return previousSearch;
  };

  return(
    <main className="movies">
      <SearchForm handleChange={handleChange} form={form} onSearch={searchFilms}/>
      <MoviesCardList sortedMovies={sortedMovies}/>
    </main>
  );
}

export default Movies;