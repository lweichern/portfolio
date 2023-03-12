// import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Link } from "react-scroll";
import { links } from "./navlinks";
import resume from "../public/images/Resume.pdf";
import { jsPDF } from "jspdf";

const hamburgerClass = "w-6 h-[1.5px] bg-slate-300";

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const router = useRouter();

  const open = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const downloadCV = () => {
    window.open("../public/images/Resume.pdf");
  };

  return (
    <nav className="flex justify-between items-center bg-primary py-5 px-5 shadow-md fixed top-0 z-10 w-full">
      {/* <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-4xl"
      >
        Logo
      </motion.div> */}

      <a href={resume} download="Resume">
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="bg-primary text-sm md:text-base font-bold text-secondary p-3 rounded hover:bg-secondary hover:text-primary border-secondary border-2 cursor-pointer"
          onClick={downloadCV}
        >
          Download CV
        </motion.div>
      </a>

      <motion.ul
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="hidden md:flex justify-around items-center gap-3 cursor-pointer"
      >
        {links.map((link) => (
          <li
            key={link.path}
            className={`transition-colors duration-300 hover:text-red-400 relative ${
              router.asPath == link.path ? "opacity-100" : ""
            }`}
          >
            <Link
              to={link.path}
              spy={true}
              smooth={true}
              offset={-85}
              duration={200}
              className="opacity-40"
            >
              {link.name}
              <motion.span
                layoutId="indicator"
                transition={{ duration: 0.4, type: "spring" }}
                className="line absolute h-[2.5px] w-full bg-accent left-0 rounded bottom-[-10%] hidden"
              ></motion.span>
            </Link>
          </li>
        ))}
      </motion.ul>

      {/* Dropdown menu */}
      <motion.ul
        className={`absolute  mx-auto top-0 w-screen h-screen bg-primary flex flex-col md:hidden justify-center gap-5 items-center cursor-pointer duration-700 ${
          hamburgerOpen
            ? "right-0 opacity-100 rotate-0"
            : "-right-[120%] opacity-0 rotate-45"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.path}
            className={`transition-colors duration-300 opacity-40 hover:text-accent text-2xl ${
              router.asPath == link.path ? "opacity-100" : ""
            }`}
          >
            <Link
              to={link.path}
              spy={true}
              smooth={true}
              offset={-85}
              duration={200}
              className="opacity-40"
              onClick={open}
            >
              {link.name}
              <div className="line border-b-[4px] border-b-accent opacity-100 hidden"></div>
            </Link>
          </li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="block md:hidden cursor-pointer"
        onClick={open}
      >
        <motion.div
          className={`hamburger-top ${hamburgerClass} transition-all duration-300 ${
            hamburgerOpen && "rotate-45 translate-y-[8px]"
          }`}
        ></motion.div>
        <motion.div
          className={`hamburger-middle ${hamburgerClass} mt-1.5 transition-all duration-300 ${
            hamburgerOpen && "opacity-0"
          }`}
        ></motion.div>
        <motion.div
          className={`hamburger-top ${hamburgerClass} mt-1.5 transition-all duration-300 ${
            hamburgerOpen && "-rotate-45 translate-y-[-7px]"
          }`}
        ></motion.div>
      </motion.div>
    </nav>
  );
}
