import './App.css';
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
import MenuBurger from '../MenuBurger/MenuBurger';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const headerPathnames = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPathnames = ['/', '/movies', '/saved-movies'];

  const [LoggedIn, setLoggedIn] = useState(false);
  const [isMenuBurgerOpened, setIsMenuBurgerOpened] = useState(false);

  function handleLogin(evt) {
    evt.preventDefault();
    setLoggedIn(true);
    navigate('/movies', { replace: true });
  };

  function handleRegister(evt) {
    evt.preventDefault();
    navigate('/signin', { replace: true });
  };

  function handleLogout() {
    setLoggedIn(false);
    navigate('/signin', { replace: true});
  }

  function handleMenuBurgerClick() {
    setIsMenuBurgerOpened(true);
  }

  function closeMenuBurger() {
    setIsMenuBurgerOpened(false);
  }

  return (
    <div className="page">
      {headerPathnames.includes(pathname) && (
        <Header LoggedIn={LoggedIn} onBurgerClick={handleMenuBurgerClick}/>
      )}
      <Routes>
        <Route
          path="/"
          element={<Main/>}
        />
        <Route
          path="/movies"
          element={<Movies/>}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies/>}
        />
        <Route
          path="/profile"
          element={<Profile handleLogout={handleLogout}/>}
        />
        <Route
          path="/signin"
          element={<Login handleLogin={handleLogin}/>}
        />
        <Route
          path="/signup"
          element={<Register handleRegister={handleRegister}/>}
        />
        <Route
          path="/*"
          element={<NotFound/>}
        />
      </Routes>
      {footerPathnames.includes(pathname) && <Footer/>}
      <MenuBurger
        isOpen={isMenuBurgerOpened}
        onClose={closeMenuBurger}
      />
    </div>
  );
}

export default App;
