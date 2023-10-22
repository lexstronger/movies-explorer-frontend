import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <>
      <label className="checkbox__label" htmlFor="checkbox">
        <input className="checkbox__input" type="checkbox" id="checkbox" />
        <p className="checkbox__name">Короткометражки</p>
      </label>
    </>
  );
}

export default FilterCheckbox;
