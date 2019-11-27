import React from "react";
import "./ticket.scss";
import { format } from "path";
// FIXME: наивное представление времени (без учета врменных зон)
export default function Ticket({ ticket }) {
  const stopsSubst = [
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
    "4 пересадки"
  ];

  const intl = new Intl.DateTimeFormat("ru-RU");
  function formatDuration(duration) {
    return Math.floor(duration / 60) + "ч " + (duration % 60) + "м";
  }
  function formatDate(date) {
    let value = "";
    try {
      value = new Date(date).toLocaleString("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      });
    } catch {
      return value;
    }
    return value;
  }

  return (
    <div className="Ticket">
      <div className="TicketHeader">
        <div className="TicketPrice">
          {ticket.price.toLocaleString() + " Р"}
        </div>
        <div className="TicketSpacer"></div>
        <div
          className="TicketCompany"
          style={{
            backgroundImage: `url(http://pics.avs.io/99/36/${ticket.carrier}@2x.png)`
          }}
        ></div>
      </div>
      <div className="TicketBottomSpacer"></div>

      <div className="TicketRoute">
        <div className="TicketRowHeader">
          {ticket.segments[0].origin + ", " + ticket.segments[0].destination}
        </div>
        <div className="TicketRowValue">
          {formatDate(ticket.segments[0].date)}
          {/* {Date.parse(intl.format(new Date().parse(ticket.segments[0].date)))} */}
        </div>
      </div>
      <div className="TicketLenght">
        <div className="TicketRowHeader">В пути</div>
        <div className="TicketRowValue">
          {formatDuration(ticket.segments[0].duration)}
        </div>
      </div>
      <div className="TicketStops">
        <div className="TicketRowHeader">
          {stopsSubst[ticket.segments[0].stops.length]}
        </div>
        <div className="TicketRowValue">
          {ticket.segments[0].stops.join(", ")}
        </div>
      </div>
      <div className="TicketRoute">
        <div className="TicketRowHeader">
          {ticket.segments[1].destination + ", " + ticket.segments[1].origin}
        </div>
        <div className="TicketRowValue">
          {formatDate(ticket.segments[1].date)}
        </div>
      </div>
      <div className="TicketLenght">
        <div className="TicketRowHeader">В пути</div>
        <div className="TicketRowValue">
          {formatDuration(ticket.segments[1].duration)}
        </div>
      </div>
      <div className="TicketStops">
        <div className="TicketRowHeader">
          {stopsSubst[ticket.segments[1].stops.length]}
        </div>
        <div className="TicketRowValue">
          {ticket.segments[1].stops.join(", ")}
        </div>
      </div>
    </div>
  );
}
