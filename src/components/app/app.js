import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import "./app.scss";
import Filter from "../filter/filter";
import Tabs from "../tabs/tabs";
import Ticket from "../ticket/ticket";

function App() {
  const [searchId, setSearchId] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [shownTickets, setShownTickets] = useState([]);
  const [filter, setFilter] = useState(
    JSON.parse(localStorage.getItem("filter")) || []
  );
  const [sort, setSort] = useState(localStorage.getItem("sort") || "price");

  const sortMethods = {
    price: function(a, b) {
      return a.price - b.price;
    },
    duration: function(a, b) {
      return (
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
      );
    }
  };

  async function fetchSearchId() {
    const res = await fetch("https://front-test.beta.aviasales.ru/search");
    res
      .json()
      .then(res => {
        setSearchId(res.searchId);
      })
      .catch(err => console.log(err));
  }

  async function fetchTickets() {
    console.log("fetch run");
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then(res => {
        if (res.ok)
          res.json().then(data => {
            console.log(data);
            setTickets([...tickets, ...data.tickets]);
            if (data.stop === false) fetchTickets();
          });
        else fetchTickets();
      })
      .catch(err => console.log(err));
  }

  function updateShown() {
    let filtered = tickets.filter(ticket => {
      let idxOrgn = filter.indexOf(ticket.segments[0].stops.length);
      let idxDest = filter.indexOf(ticket.segments[1].stops.length);
      if (idxOrgn !== -1 || idxDest !== -1) return true;
      return false;
    });
    setShownTickets(filtered.sort(sortMethods[sort]).splice(0, 5));
  }

  useEffect(() => {
    if (searchId !== 0) fetchTickets();
  }, [searchId]);

  useEffect(() => {
    fetchSearchId();
  }, []);

  useEffect(() => {
    updateShown();
  }, [tickets, filter, sort]);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {
    localStorage.setItem("sort", sort);
  }, [sort]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-Container">
        <Filter filter={filter} setFilter={setFilter}></Filter>
        <div className="App-RightColumn">
          <Tabs setSort={setSort} sort={sort}></Tabs>
          {shownTickets.map((value, index) => {
            return <Ticket key={index} ticket={value}></Ticket>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
