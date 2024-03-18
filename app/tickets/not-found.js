import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-3xl">We hit a brick wall</h2>
      <p>We could not find the ticket you are looking for</p>
      <p>Go Back To the</p> <Link href="/tickets">Dashboard</Link>
    </div>
  );
}
