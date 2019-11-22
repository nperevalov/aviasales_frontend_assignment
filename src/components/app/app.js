import React from "react";
import logo from "../../assets/images/logo.svg";
import "./app.css";
import Filter from "../filter/filter";
import Tabs from "../tabs/tabs";
import Ticket from "../ticket/ticket";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-Container">
        <Filter></Filter>
        <div className="App-RightColumn">
          <Tabs onTabSelect={key => key} defaultTab={0}></Tabs>
          <Ticket></Ticket>
        </div>
      </div>
    </div>
  );
}

export default App;
