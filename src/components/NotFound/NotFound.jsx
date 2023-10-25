import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  function backToPreviousPage() {
    navigate(-1);
  }
  return (
    <main className="content">
      <section className="not-found">
        <h1 className="not-found__heading">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <button
          className="not-found__button"
          type="button"
          onClick={backToPreviousPage}
        >
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;
