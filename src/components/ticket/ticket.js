import React from "react";
import "./ticket.css";

export default function Ticket() {
  return (
    <div className="Ticket">
      <div className="TicketHeader">
        <div className="TicketPrice">13 400 Р</div>
        <div className="TicketSpacer"></div>
        <div className="TicketCompany"></div>
      </div>
      <div className="TicketRow">
        <div className="TicketRoute">
          <div className="TicketRowHeader">MOW – HKT</div>
          <div className="TicketRowValue">10:45 – 08:00</div>
        </div>
        <div className="TicketLenght">
          <div className="TicketRowHeader">В пути</div>
          <div className="TicketRowValue">21ч 15м</div>
        </div>
        <div className="TicketStops">
          <div className="TicketRowHeader">2 пересадки</div>
          <div className="TicketRowValue">HKG, JNB</div>
        </div>
      </div>
      <div className="TicketRow">
        <div className="TicketRoute">
          <div className="TicketRowHeader">MOW – HKT</div>
          <div className="TicketRowValue">10:45 – 08:00</div>
        </div>
        <div className="TicketLenght">
          <div className="TicketRowHeader">В пути</div>
          <div className="TicketRowValue">21ч 15м</div>
        </div>
        <div className="TicketStops">
          <div className="TicketRowHeader">2 пересадки</div>
          <div className="TicketRowValue">HKG, JNB</div>
        </div>
      </div>
    </div>
  );
}
