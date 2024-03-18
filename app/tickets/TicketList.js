import Link from "next/link";

async function getTickets() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function Ticketlist() {
  const tickets = await getTickets();

  return (
    <>
      {tickets?.map((item) => {
        return (
          <div key={item?.userId} className="card my-5">
            <Link href={`/tickets/${item?.id}`}>
              <h3>{item?.title}</h3>
              <p>body {item?.title}</p>
              <div>{item?.completed} priority</div>
            </Link>
          </div>
        );
      })}
      {tickets?.length === 0 && (
        <>
          <p className="text-center">there are no open tickets</p>
        </>
      )}
    </>
  );
}
