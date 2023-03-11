import React from "react";
import { links } from "./navlinks";
import { Link } from "react-scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" text-center py-10 shadow-2xl">
      <div>&copy; {year} Lim Wei Chern. All rights reserved.</div>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 items-center text-accent lg:w-1/2 mx-auto my-3">
        {links.map((link) => (
          <Link
            to={link.path}
            smooth={true}
            offset={-85}
            duration={200}
            key={link.path}
            className=" cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </footer>
  );
}
