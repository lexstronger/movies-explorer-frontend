import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useFormWithValidation } from "../../hooks/useForm";
import { sortMovies } from "../../utils/utils";
import Preloader from "../Preloader/Preloader";

function Movies({ movies, getFilms, onLike, onDelete, checkSaved }) {
  const [sortedMovies, setSortedMovies] = React.useState(
    recoverPreviousSearch().sortedMovies
  );
  const [errorText, setErrorText] = React.useState("");
  const [unsuccessfulSearch, setUnsuccessfulSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const { form, handleChange } = useFormWithValidation(
    recoverPreviousSearch().form
  );

  React.useEffect(() => {
    if (movies.length === 0) {
      return;
    }
    if (!form.keyword) {
      setSortedMovies([]);
      setErrorText("Введите ключевое слово");
      return;
    }
    setIsLoading(false);
    setSortedMovies(sortMovies(movies, form.keyword, form.checkbox));
  }, [movies, form.checkbox]);

  React.useEffect(() => {
    localStorage.setItem(
      "previousSearch",
      JSON.stringify({
        sortedMovies,
        form,
      })
    );
  }, [sortedMovies, form]);

  React.useEffect(() => {
    localStorage.setItem(
      "previousSearch",
      JSON.stringify({
        sortedMovies,
        form,
      })
    );
    setUnsuccessfulSearch(sortedMovies.length === 0 ? "Ничего не найдено" : "");
  }, [sortedMovies, form.checkbox, form]);

  function recoverPreviousSearch() {
    const previousSearch = JSON.parse(localStorage.getItem("previousSearch"));
    if (!previousSearch)
      return {
        form: {
          keyword: "",
          checkbox: false,
        },
        sortedMovies: [],
      };
    return previousSearch;
  }

  function searchFilms(keyword, isShort) {
    if (movies.length === 0) {
      setIsLoading(true);
      setErrorText("");
      getFilms();
    } else if (!keyword) {
      setSortedMovies([]);
      setErrorText("Введите ключевое слово");
    } else {
      setErrorText("");
      setIsLoading(false);
      setSortedMovies(sortMovies(movies, keyword, isShort));
    }
  }

  return (
    <main className="movies">
      <SearchForm
        handleChange={handleChange}
        form={form}
        onSearch={searchFilms}
        errorText={errorText}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          sortedMovies={sortedMovies}
          checkSaved={checkSaved}
          onDelete={onDelete}
          onLike={onLike}
          errorText={errorText}
          unsuccessfulSearch={unsuccessfulSearch}
        />
      )}
    </main>
  );
}

export default Movies;
