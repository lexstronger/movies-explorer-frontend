import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({form, handleChange, onSearch, errorText}) {

  const errorTextClass = `search-form__error ${errorText ? 'search-form__error_active' : ''}`;
  
  function handleSumbit(evt) {
    evt.preventDefault();
    onSearch(form.keyword, form.checkbox);
  }
  return (
    <section className="search-string">
      <form className="search-form" onSubmit={handleSumbit} noValidate>
        <div className="search-form-container">
          <input className="search-form__input" type="text" name="keyword" placeholder="Фильм" value={form.keyword} onChange={handleChange}/>
          <button className="search-form__button" type="submit">Поиск</button>
        </div>
        <span className={errorTextClass}>{errorText}</span>   
        <FilterCheckbox onChange={handleChange} value={form.checkbox}/>
      </form>
    </section>
  );
  
}


export default SearchForm;