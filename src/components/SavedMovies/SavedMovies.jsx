import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { sortMovies } from "../../utils/utils";
import { useLocation } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useForm";

function SavedMovies({movies, getFilms}) {
  const location = useLocation().pathname;
  const [sortedMovies, setSortedMovies] = React.useState(recoverPreviousSearch().sortedMovies);
  
  const { form, handleChange } = useFormWithValidation(recoverPreviousSearch().form);

  // React.useEffect(() => {
  //   if (movies.length === 0 && getFilms) {
  //     return;
  //   }
  //   setSortedMovies(sortMovies(movies, form.keyword, form.checkbox));
  // }, [movies, form.checkbox, getFilms, form.keyword]);

  // function searchFilms (keyword, isShort) {
  //   if (movies.length === 0 && getFilms) {
  //     getFilms();
  //   } else {
  //     setSortedMovies(sortMovies(movies, keyword, isShort));
  //   }
  // }

  React.useEffect(() => {
    if (location === '/saved-movies') return;
    localStorage.setItem('previousSearch', JSON.stringify({
      sortedMovies,
      form,
    }));
  }, [sortedMovies, form.checkbox, location, form]);

  function recoverPreviousSearch() {
    if (location === '/saved-movies') return {
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
    <main className="saved-movies">
      <SearchForm handleChange={handleChange} form={form}/>
      <MoviesCardList sortedMovies={sortedMovies}/>
    </main>
  );
}

export default SavedMovies;