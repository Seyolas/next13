import { notFound } from "next/navigation";
export const dynamicParams = true;

// true (default): Dynamic segments not included in generateStaticParams are generated on demand.
// false: Dynamic segments not included in generateStaticParams will return a 404.

// if i set revalidate to the 0 it means that i want to dynamically render the page on every visit. So
// there is no need to use generateStaticParams

// if i have a revalidate value than next.js can use generateStaticParams because it knows that it doesn't
// have to fetch data for a certain amount of time. Therefore it could be confident for that time period(revalidate)
// the content on the page wouldn't change. When the time elapses it would just refetch the data again and rebuild the page and deliver to the CDN.
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const tickets = await res.json();
  return tickets.map((item) => ({
    id: String(item?.id),
  }));
}

// apply 60sec cache to the fetch request. If the data changes it rebuilds the page.
async function getTicket(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params?.id);

  return (
    <main>
      <nav>
        <h2>Ticket Detail</h2>
        <div className="card">
          <h3>{ticket?.title}</h3>
          <small>created by {ticket?.userId}</small>
          <p>{ticket.title}</p>
          <div>{ticket.completed} priority</div>
        </div>
      </nav>
    </main>
  );
}
