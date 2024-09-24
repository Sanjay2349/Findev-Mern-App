import React from "react";
import "../../../Styles/Filter.css";
function Filter() {
  return (
    <div className="Filterbar">
      <h1>Filters</h1>
      <div className="allfilter">
        <label class="container">
          One
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="container">
          Two
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="container">
          Three
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="container">
          Four
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

export default Filter;
