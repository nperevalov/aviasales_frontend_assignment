import React from "react";
import "./filter.scss";

export default function Filter({ filter, setFilter }) {
  const stopsSubst = [
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки"
  ];

  const handleChange = event => {
    event.persist();
    let val = parseInt(event.target.value);

    let index = filter.indexOf(val);
    if (event.target.checked === true) {
      filter.push(val);
    } else {
      if (index !== -1) {
        filter.splice(index, 1);
      }
    }
    setFilter([...filter]);
  };
  const handleChangeAll = event => {
    if (event.target.checked === true) {
      setFilter([...stopsSubst.keys()]);
    } else setFilter([]);
  };
  return (
    <div className="filter">
      <div className="filter__title">Количество пересадок</div>
      <label className="filter__checkbox">
        Все
        <input
          className="filter__checkbox__input"
          type="checkbox"
          checked={filter.length === stopsSubst.length}
          onChange={handleChangeAll}
        />
        <span className="filter__checkbox__mark"></span>
      </label>

      {stopsSubst.map((value, index) => {
        return (
          <label className="filter__checkbox" key={index}>
            {stopsSubst[index]}
            <input
              className="filter__checkbox__input"
              type="checkbox"
              checked={filter.includes(index)}
              value={index}
              onChange={handleChange}
            />
            <span className="filter__checkbox__mark"></span>
          </label>
        );
      })}
    </div>
  );
}
