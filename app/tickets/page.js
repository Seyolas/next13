import React from "react";
import Ticketlist from "./TicketList";

export default function page() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currenty Open Tickets</small>
          </p>
        </div>
      </nav>
      <Ticketlist />
    </main>
  );
}
