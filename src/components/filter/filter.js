import React from "react";
import "./filter.scss";

// TODO: Исправить косяк с высотой
// TODO: анимация нажатия и синхронизация
export default function Filter({ filter, setFilter }) {
  const stopsSubst = [
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки"
  ];

  var handleChange = event => {
    event.persist();
    var val = parseInt(event.target.value);

    var index = filter.indexOf(val);
    if (event.target.checked === true) {
      filter.push(val);
    } else {
      if (index !== -1) {
        filter.splice(index, 1);
      }
    }
    setFilter([...filter]);
  };
  var handleChangeAll = event => {
    if (event.target.checked === true) {
      setFilter([...stopsSubst.keys()]);
    } else setFilter([]);
  };
  return (
    <div className="FilterContainer">
      <div className="FilterTitle">Количество пересадок</div>
      <label className="my-checkbox">
        Все
        <input
          type="checkbox"
          checked={filter.length === stopsSubst.length}
          onChange={handleChangeAll}
        />
        <span className="mark"></span>
      </label>

      {stopsSubst.map((value, index) => {
        return (
          <label className="my-checkbox" key={index}>
            {stopsSubst[index]}
            <input
              type="checkbox"
              checked={filter.includes(index)}
              value={index}
              onChange={handleChange}
            />
            <span className="mark"></span>
          </label>
        );
      })}
    </div>
  );
}
