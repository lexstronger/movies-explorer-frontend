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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import moviesData from "../../utils/utils";

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


  function handleMenuBurgerClick() {
    setIsMenuBurgerOpened(true);
  }

  function closeMenuBurger() {
    setIsMenuBurgerOpened(false);
  }

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

  function handleRegisterUser({ name, email, password }) {
    mainApi
      .register({ name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoginUser({ email, password }) {
    mainApi
      .authorize({ email, password })
      .then(({ token }) => {
        setLoggedIn(true);
        mainApi.setAuthHeaders(token);
        localStorage.setItem("jwt", token);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    navigate("/", { replace: true });
    localStorage.removeItem("jwt");
  }

  function handleEditUser({name, email}) {
    return mainApi
      .editUserInfo({name, email})
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function restoreFilms() {
    return JSON.parse(localStorage.getItem('movies') ?? '[]');
  }

  function getFilms() {
    return moviesApi.getMovies()
      .then(films => {
        const convertedFilms = moviesData(films);
        setMovies(convertedFilms);
        localStorage.setItem('movies', JSON.stringify(convertedFilms));
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
            <Route path="/movies" element={<Movies loggedIn={loggedIn} movies={movies} getFilms={getFilms}/>} />
            <Route
              path="/saved-movies"
              element={<SavedMovies loggedIn={loggedIn} />}
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
        <MenuBurger isOpen={isMenuBurgerOpened} onClose={closeMenuBurger} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
