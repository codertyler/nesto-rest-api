import React from "react";
import "./Preferences.css";

//The selected preference is passed to the parent down to other components.

const Preferences = ({ handleOnChange }) => {
  return (
    <div className="preferences-container">
      <div className="prefences-radio-container" onChange={handleOnChange}>
        <input type="radio" value="showAll" id="radioShowAll" name="cards" />
        <label htmlFor="radioShowAll">Show All</label>
        <input
          type="radio"
          value="showByAnnualFee"
          id="radioShowByAnnualFee"
          name="cards"
        />
        <label htmlFor="radioShowByAnnualFee">Rank by Annual Fee</label>
        <input
          type="radio"
          value="showByInterestRate"
          id="radioShowByInterestRate"
          name="cards"
        />
        <label htmlFor="radioShowByInterestRate">
          Rank by Purchase Interest Rate
        </label>
      </div>
    </div>
  );
};

export default Preferences;
