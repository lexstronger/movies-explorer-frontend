import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({onChange, value}) {
  return (
    <>
      <label className="checkbox" htmlFor="checkbox">
        <input className="checkbox__input" type="checkbox" name="checkbox" id="checkbox" checked={value} onChange={onChange} />
        <span className="checkbox__name">Короткометражки</span>
      </label>
    </>
  );
}

export default FilterCheckbox;
