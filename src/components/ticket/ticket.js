import React from "react";
import "./ticket.scss";

// FIXME: наивное представление времени (без учета врменных зон)
export default function Ticket({ ticket }) {
  const stopsSubst = [
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
    "4 пересадки"
  ];

  const formatDuration = duration => {
    return Math.floor(duration / 60) + "ч " + (duration % 60) + "м";
  };

  const formatDate = (date, duration) => {
    let departmentDate = new Date(date);
    let arrivalDate = new Date(departmentDate.getTime() + duration * 60 * 1000);
    let value =
      ("0" + departmentDate.getHours()).slice(-2) +
      ":" +
      ("0" + departmentDate.getMinutes()).slice(-2) +
      " - " +
      ("0" + arrivalDate.getHours()).slice(-2) +
      ":" +
      ("0" + arrivalDate.getMinutes()).slice(-2);

    return value;
  };

  return (
    <div className="ticket">
      <div className="ticket__price">
        {ticket.price.toLocaleString() + " Р"}
      </div>
      <div
        className="ticket__company"
        style={{
          backgroundImage: `url(http://pics.avs.io/99/36/${ticket.carrier}@2x.png)`
        }}
      ></div>
      {ticket.segments.map(val => {
        return (
          <React.Fragment>
            <div className="ticket__route">
              <div className="ticket__route__title">
                {val.origin + ", " + val.destination}
              </div>
              <div className="ticket__route__value">
                {formatDate(val.date, val.duration)}
              </div>
            </div>
            <div className="ticket__lenght">
              <div className="ticket__lenght__title">В пути</div>
              <div className="ticket__lenght__value">
                {formatDuration(val.duration)}
              </div>
            </div>
            <div className="ticket__stops">
              <div className="ticket__stops__title">
                {stopsSubst[val.stops.length]}
              </div>
              <div className="ticket__stops__value">{val.stops.join(", ")}</div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
