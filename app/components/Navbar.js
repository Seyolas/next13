import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./dojo-logo.png";
export default function Navbar() {
  return (
    <div>
      <nav>
        <Image src={Logo} alt="" width={70} quality={100} placeholder="blur" />
        <h1>Dojo HelpDesk</h1>
        <Link href="/">Dasboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  );
}
