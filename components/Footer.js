import React from "react";
import { links } from "./navlinks";
import { Link } from "react-scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" text-center py-10 shadow-2xl">
      <div>&copy; {year} Lim Wei Chern. All rights reserved.</div>
      <ul className="grid gap-1 grid-row grid-cols-fluidFooter justify-items-center mt-6 mx-auto text-accent lg:w-1/2">
        {links.map((link) => (
          <Link
            to={link.path}
            smooth={true}
            offset={-85}
            duration={200}
            key={link.path}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </footer>
  );
}
