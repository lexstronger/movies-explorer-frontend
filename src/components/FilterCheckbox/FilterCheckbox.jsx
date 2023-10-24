import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <>
      <label className="checkbox" htmlFor="checkbox">
        <input className="checkbox__input" type="checkbox" id="checkbox" />
        <span className="checkbox__name">Короткометражки</span>
      </label>
    </>
  );
}

export default FilterCheckbox;
