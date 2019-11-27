import React from "react";
import "./tabs.scss";

export default function Tabs({ sort, setSort }) {
  const handeChange = event => {
    event.persist();
    setSort(event.target.name);
  };
  return (
    <div className="tabs">
      <label
        className={
          "tabs__item " +
          (sort === "price" ? "tabs__item__state__selected" : "")
        }
      >
        <input
          className={"tabs__item__input"}
          onChange={handeChange}
          type="radio"
          name="price"
          autoComplete="off"
          checked={sort === "price"}
        />
        Самый дешевый
      </label>
      <label
        className={
          "tabs__item " +
          (sort === "duration" ? "tabs__item__state__selected" : "")
        }
      >
        <input
          className={"tabs__item__input"}
          onChange={handeChange}
          type="radio"
          name="duration"
          autoComplete="off"
          checked={sort === "duration"}
        />
        Самый быстрый
      </label>
    </div>
  );
}
