// bikin navbar

import Link from "next/link";

export default function Navbar() {
  return (
    // UP3 NAVBAR
    <nav className="flex bg-orange-800 items-center justify-between px-5 py-2">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex text-white ">
        <Link href="/">
          <li className="mr-5 cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="mr-5 cursor-pointer">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="mr-5 cursor-pointer">Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
