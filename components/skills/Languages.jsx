import React from "react";
import LanguageCard from "./LanguageCard";
import { motion } from "framer-motion";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
} from "react-icons/io";
import {
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNestjs,
  SiJquery,
  SiPython,
  SiDjango,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiVuejsFill } from "react-icons/ri";
import { FaFigma, FaGitAlt, FaJava } from "react-icons/fa";
import Divider from "../common/Divider";

export default function Languages({}) {
  const logoStyle = "w-10 h-10 mx-auto";

  const languages = [
    {
      name: "HTML",
      component: <IoLogoHtml5 className={logoStyle} />,
    },
    {
      name: "CSS",
      component: <IoLogoCss3 className={logoStyle} />,
    },
    {
      name: "Javascript",
      component: <IoLogoJavascript className={logoStyle} />,
    },
    {
      name: "Java",
      component: <FaJava className={logoStyle} />,
    },
    {
      name: "Tailwind",
      component: <SiTailwindcss className={logoStyle} />,
    },
    {
      name: "TypeScript",
      component: <SiTypescript className={logoStyle} />,
    },
    {
      name: "Python",
      component: <SiPython className={logoStyle} />,
    },
    {
      name: "Golang",
      component: (
        <img
          src="images/golang.png"
          alt="Golang Icon"
          className="w-20 h-10 mx-auto"
        />
      ),
    },
    {
      name: "React JS",
      component: <SiReact className={logoStyle} />,
    },
    {
      name: "Git",
      component: <FaGitAlt className={logoStyle} />,
    },
    {
      name: "Next JS",
      component: <TbBrandNextjs className={logoStyle} />,
    },
    {
      name: "Vue JS",
      component: <RiVuejsFill className={logoStyle} />,
    },
    {
      name: "Node JS",
      component: <IoLogoNodejs className={logoStyle} />,
    },
    {
      name: "Express JS",
      component: <SiExpress className={logoStyle} />,
    },
    {
      name: "Django",
      component: <SiDjango className={logoStyle} />,
    },
    {
      name: "JQuery",
      component: <SiJquery className={logoStyle} />,
    },
    {
      name: "Figma",
      component: <FaFigma className={logoStyle} />,
    },
    {
      name: "Nest JS",
      component: (
        <img src="images/nestJS.png" alt="Nest JS Icon" className={logoStyle} />
      ),
    },
  ];

  const container = {
    hidden: { opacity: 2, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="languagesSection"
      className="text-center bg-secondary text-primary py-8"
    >
      <h1 className=" text-4xl font-semibold uppercase tracking-widest font-title ">
        Skills
      </h1>
      <Divider bgColor="white" />
      <motion.div
        className="grid gap-3 mx-auto grid-row grid-cols-fluid2 justify-items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {languages.map((language) => (
          <LanguageCard
            key={language.name}
            name={language.name}
            component={language.component}
          />
        ))}
      </motion.div>
    </section>
  );
}
