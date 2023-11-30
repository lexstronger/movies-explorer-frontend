import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MenuBurger from "../MenuBurger/MenuBurger";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { moviesData } from "../../utils/utils";

function App() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const headerPathnames = ["/", "/movies", "/saved-movies", "/profile"];
  const footerPathnames = ["/", "/movies", "/saved-movies"];

  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuBurgerOpened, setIsMenuBurgerOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState(restoreFilms());
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isStatus, setIsStatus] = useState({
    status: "",
    message: "",
  });
// Открытие бургер-меню
  function handleMenuBurgerClick() {
    setIsMenuBurgerOpened(true);
  }
// Закрытие бургер-меню
  function closeMenuBurger() {
    setIsMenuBurgerOpened(false);
  }
//Работа с токеном
  useEffect(() => {
    handleCheckToken();
  }, []);

  function handleCheckToken() {
    const token = localStorage.getItem("jwt");
    if (!token) return setIsLoading(false);
    mainApi
      .checkToken(token)
      .then(() => {
        mainApi.setAuthHeaders(token);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getCurrentUser()
        .then(({data}) => {
          setCurrentUser(data);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then(() => {
          setSavedMovies();
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closePopup();
      }
    }
    if(isInfoTooltipOpen || isMenuBurgerOpened) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isInfoTooltipOpen, isMenuBurgerOpened])

  function closePopup() {
    setIsInfoTooltipOpen(false);
    setIsMenuBurgerOpened(false);
  }

  function closePopupByOverlay(evt) {
    if (evt.target.classList.contains("popup") || evt.target.classList.contains("window")) {
      closePopup();
    }
  }
// Регистрация
  function handleRegisterUser({ name, email, password }) {
    mainApi
      .register({ name, email, password })
      .then((res) => {
        console.log(res);
        setIsStatus({
          status: true,
          message: "Вы успешно зарегистрировались!",
        });
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        setIsStatus({
          status: false,
          message: "Что-то пошло не так! Попробуйте еще раз.",
        });
        console.log(err);
      })
      .finally(() => {
        setIsInfoTooltipOpen(true);
      })
  }
// Авторизация
  function handleLoginUser({ email, password }) {
    mainApi
      .authorize({ email, password })
      .then(({ token }) => {
        setIsStatus({
          status: true,
          message: "Вы успешно вошли!",
        });
        setLoggedIn(true);
        mainApi.setAuthHeaders(token);
        localStorage.setItem("jwt", token);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setIsStatus({
          status: false,
          message: "Что-то пошло не так! Попробуйте еще раз.",
        });
        console.log(err);
      })
      .finally(() => {
        setIsInfoTooltipOpen(true);
      })
  }
//Выход из профиля
  function handleLogout() {
    setLoggedIn(false);
    navigate("/", { replace: true });
    localStorage.removeItem("jwt");
  }
// Редактирование профиля
  function handleEditUser({name, email}) {
    return mainApi
      .editUserInfo({name, email})
      .then((res) => {
        setCurrentUser(res);
        setIsStatus({
          status: true,
          message: "Данные успешно обновлены!",
        });
      })
      .catch((err) => {
        setIsStatus({
          status: false,
          message: "Что-то пошло не так! Попробуйте еще раз.",
        });
        console.log(err);
      })
      .finally(() => {
        setIsInfoTooltipOpen(true);
      })
  }

  function restoreFilms() {
    return JSON.parse(localStorage.getItem('movies') ?? '[]');
  }

  function getFilms() {
    moviesApi.getMovies()
      .then((foundMovies) => {
      setMovies(moviesData(foundMovies));
      localStorage.setItem('movies', JSON.stringify(moviesData(foundMovies)));
      })
      .catch((err) => {
        console.log(err);
      });
  }
// Сохранение фильма
  function likeMovie(movie) {
    mainApi.addNewMovie(movie)
    .then((newMovie) => {
      setSavedMovies([...savedMovies, newMovie]);
    })
    .catch((err) => {
      console.log(err);
    });
  }
// Удаление фильма
  function deleteMovie(movie) {
    const id = movie._id || savedMovies.find(i => i.id === movie.id)._id;
    mainApi.deleteMovie(id)
      .then(() => {
        setSavedMovies(movies => movies.filter(item => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // function checkSaved(movie) {
  //   return savedMovies.some((i) => i._id === movie._id || i.movieId === movie.movieId);
  // }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {headerPathnames.includes(pathname) && (
          <Header loggedIn={loggedIn} onBurgerClick={handleMenuBurgerClick} />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
            <Route path="/movies" element={<Movies loggedIn={loggedIn} movies={movies} getFilms={getFilms} onLike={likeMovie}
            //  checkSaved={checkSaved}
             />} />
            <Route
              path="/saved-movies"
              element={<SavedMovies loggedIn={loggedIn} movies={savedMovies} getFilms={getFilms} onDelete={deleteMovie}
              // checkSaved={checkSaved}
              />}
            />
            <Route
              path="/profile"
              element={
                <Profile loggedIn={loggedIn} onEdit={handleEditUser} handleLogout={handleLogout} />
              }
            />
          </Route>
          <Route path="/signin" element={<Login onLogin={handleLoginUser} />} />
          <Route
            path="/signup"
            element={<Register OnRegister={handleRegisterUser} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {footerPathnames.includes(pathname) && <Footer />}
        <MenuBurger isOpen={isMenuBurgerOpened} onClose={closeMenuBurger} onOverlayClose={closePopupByOverlay}/>
        <InfoTooltip
            isStatus={isStatus}
            isOpen={isInfoTooltipOpen}
            onClose={closePopup}
            onOverlayClose={closePopupByOverlay}
            alt={"Статус"}
          />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
