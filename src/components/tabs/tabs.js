import React, { useState } from "react";
import "./tabs.scss";

// TODO: сделать рамку и подстветку onhover
export default function Tabs({ sort, setSort }) {
  var handeChange = event => {
    event.persist();
    setSort(event.target.name);
  };
  return (
    <div className="TabsContainer">
      <label className={"TabItem " + (sort === "price" ? "ActiveTabItem" : "")}>
        <input
          onChange={handeChange}
          type="radio"
          name="price"
          autoComplete="off"
          checked={sort === "price"}
        />
        Самый дешевый
      </label>
      <label
        className={"TabItem " + (sort === "duration" ? "ActiveTabItem" : "")}
      >
        <input
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
