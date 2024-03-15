async function getTickets() {
  const res = await fetch(
    "https://my.api.mockaroo.com/tickets.json?key=98d847b0"
  );
  return res.json();
}

export default async function Ticketlist() {
  const tickets = await getTickets();

  return (
    <>
      {tickets?.map((item) => {
        return (
          <div key={item?.id} className="card my-5">
            <h3>{item?.title}</h3>
            <p>{item?.body}</p>
            <div className={`pill ${item?.priority}`}>
              {item?.priority} priority
            </div>
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
