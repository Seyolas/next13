import { Suspense } from "react";
import Ticketlist from "./TicketList";
import Loading from "../loading";

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
      <Suspense fallback={<Loading />}>
        <Ticketlist />
      </Suspense>
    </main>
  );
}
