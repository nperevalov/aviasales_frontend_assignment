import React, { useState } from "react";
import "./tabs.sass";

// FIXME: Серая граница вокруг активного элемента
// FIXME: Изменить табы на link или button для семантики
export default function Tabs(props) {
  const [selectedTab, setTab] = useState(props.defaultTab);

  function handleClick(e) {
    e.preventDefault();
    setTab(parseInt(e.target.id));
    props.onTabSelect(e.target.id);
  }
  return (
    <div className="TabsContainer">
      <div
        className={"TabItem " + (selectedTab === 0 ? "ActiveTabItem" : "")}
        onClick={handleClick}
        id={0}
      >
        <div className="TabItemContent">Самый дешевый</div>
      </div>
      <div
        className={"TabItem " + (selectedTab === 1 ? "ActiveTabItem" : "")}
        onClick={handleClick}
        id={1}
      >
        <div className="TabItemContent">Самый быстрый</div>
      </div>
    </div>
  );
}
