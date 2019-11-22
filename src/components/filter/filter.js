import React from "react";
import "./filter.css";

export default function Filter() {
  return (
    <div className="FilterContainer">
      <div className="FilterTitle">Количество пересадок</div>
      <div className="FilterCheckbox">
        <input type="checkbox" id="all" name="all" className="MyCheckbox" />
        <label htmlFor="all">Все</label>
      </div>
      <div className="FilterCheckbox">
        <input type="checkbox" id="none" name="none" className="MyCheckbox" />
        <label htmlFor="none">Без пересадок</label>
      </div>
      <div className="FilterCheckbox">
        <input type="checkbox" id="one" name="one" className="MyCheckbox" />
        <label htmlFor="one">1 пересадка</label>
      </div>
      <div className="FilterCheckbox">
        <input type="checkbox" id="two" name="two" className="MyCheckbox" />
        <label htmlFor="two">2 пересадки</label>
      </div>
      <div className="FilterCheckbox">
        <input type="checkbox" id="three" name="three" className="MyCheckbox" />
        <label htmlFor="three">3 пересадки</label>
      </div>
    </div>
  );
}
