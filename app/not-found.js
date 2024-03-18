import Link from "next/link";

export default function notFound() {
  return (
    <div className="text-center">
      <h2 className="text-3xl"> there was a problem</h2>
      <p>We could not find the page you are looking for</p>
      <p>Go Back To the</p> <Link href="/">Dashboard</Link>
    </div>
  );
}
