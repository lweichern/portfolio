import React from "react";
import LanguageCard from "./LanguageCard";
import { motion } from "framer-motion";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiTypescript, SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiVuejsFill } from "react-icons/ri";

export default function Languages({}) {
  const logoStyle = "w-6 h-6 mx-auto";

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
      name: "Tailwind",
      component: <SiTailwindcss className={logoStyle} />,
    },
    {
      name: "TypeScript",
      component: <SiTypescript className={logoStyle} />,
    },
    {
      name: "React JS",
      component: <SiReact className={logoStyle} />,
    },
    {
      name: "Next JS",
      component: <TbBrandNextjs className={logoStyle} />,
    },
    {
      name: "Vue JS",
      component: <RiVuejsFill className={logoStyle} />,
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
      className="text-center bg-secondary text-primary py-4"
    >
      <h1 className=" text-4xl py-5 font-semibold uppercase tracking-widest font-title ">
        Programming Languages
      </h1>
      <motion.div
        className="flex justify-center gap-3 flex-wrap mx-auto"
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
