import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-string">
      <form className="search-form">
        <div className="search-form-container">
          <input className="search-form__input" type="text" placeholder="Фильм"/>
          <button className="search-form__button">Поиск</button>
        </div>        
        <FilterCheckbox />
      </form>
    </section>
  );
}


export default SearchForm;