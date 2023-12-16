import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Divider from "../common/Divider";

export default function Projects() {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalObj, setModalObj] = useState({});

  const toggle = (projectName) => {
    const project = projects.find((elem) => elem.name == projectName);
    console.log("Projects desc: ", project);
    setModalObj(project);
    setToggleModal(!toggleModal);
  };

  const projects = [
    {
      name: "Captivate AI",
      url: "https://captivate-ai.vercel.app/",
      imageSrc: "CaptivateAI.png",
      description:
        "A SaaS project that generates product description mainly for property agents using OpenAI Api. Libraries like NextJS, Tailwind, and Typescript are used on the frontend. Data are stored in Supabase and the authentication methods are configured using Clerk Auth.",
      year: "2023",
      githubUrl: "https://github.com/lweichern/CaptivateAI",
      languages: [
        "Next JS",
        "Typescript",
        "Tailwind CSS",
        "Framer Motion",
        "ClerkAuth",
        "Supabase",
      ],
    },
    {
      name: "EventMemo",
      url: "https://t3-to-do-list-e48h.vercel.app/",
      imageSrc: "project 7.jpg",
      description:
        "Developed a Single-Page Website called Event Memo that mimics a to-do-list using the T3 stack. The data is stored in an open-source database called Supabase and called using PostgreSQL.",
      year: "2023",
      githubUrl: "https://github.com/lweichern/T3-to-do-list",
      languages: [
        "React JS",
        "NextJS",
        "TypeScript",
        "Prisma",
        "TRPC",
        "Tailwind CSS",
        "NextAuth",
      ],
    },
    {
      name: "MovieNow",
      url: "https://lweichern.github.io/Movie-Now-TS/",
      imageSrc: "project 6.jpg",
      description:
        "Developed a Single-Page Website called MovieNow using React JS with Typescript that allows users to search for their favourite movies. React libraries like Framer Motion, React Router Dom, Styled Components, etc are utilized in this project. The movies shown in the website is displayed using the TMDI API upon calling it.",
      year: "2022",
      githubUrl: "https://github.com/lweichern/Movie-Now",
      languages: [
        "React JS",
        "HTML",
        "CSS",
        "React Redux",
        "TypeScript",
        "Framer Motion",
      ],
    },
    {
      name: "Travlog",
      url: "https://lweichern.github.io/travlog/",
      imageSrc: "project 5.jpg",
      description:
        "Developed a Single-Page Website called Travlog using React JS that allows trip lovers to explore the world through the blog posts of others. In this project, I utilized React libraries such as React Icons, Framer Motion, React Router Dom, React Undraw, Material UI and Styled Components. Also, I also integrated a React Redux on a function that stores the favorite posts that the user wants.",
      year: "2022",
      githubUrl: "https://github.com/lweichern/travlog",
      languages: ["React JS", "HTML", "CSS", "React Redux", "Framer Motion"],
    },
    {
      name: "Tenzies",
      url: "https://lweichern.github.io/tenzies/",
      imageSrc: "project 4.jpg",
      description:
        "Developed a game called Tenzies which allow the player to roll all the dices to the same number. Besides, a high score will be recorded based on the time taken to beat the game.",
      year: "2022",
      githubUrl: "https://github.com/lweichern/tenzies",
      languages: ["React JS", "HTML", "CSS"],
    },
    {
      name: "NEA 360° Virtual Tour",
      url: "https://nea-wolbachia-a62b4.web.app/",
      imageSrc: "project 3.jpg",
      description:
        "Developed a 360° virtual tour for the National Environment Agency Singapore on my first job as a multimedia developer. I utilized a javascript library called Marzipano to integrate 360° images to the project. Using our interface, users can experience the site virtually by navigating around.",
      year: "2021",
      githubUrl: "https://github.com/lweichern/NEA-Wolbachia",
      languages: ["HTML", "CSS", "Javascript", "Marzipano"],
    },
    {
      name: "Wordle Clone",
      url: "https://lweichern.github.io/wordle/",
      imageSrc: "project 2.jpg",
      description:
        "Developed a game called Wordle using ReactJS. The point of the game is to guess a random 5-letter-word with hints given after each wrong guess. The game allows the player to guess up to 6 times and the final word will be randomized after each page refresh.",
      year: "2021",
      githubUrl: "https://github.com/lweichern/wordle",
      languages: ["HTML", "CSS", "Javascript", "ReactJS"],
    },
  ];

  let tempProjects = [...projects].map((obj) => ({ ...obj })); // clone project to a brand new/independent array
  for (let project of tempProjects) {
    if (project.description.length > 150) {
      project.description = project.description.substring(0, 230) + "...";
    }
  }

  return (
    <section id="projectsSection" className="text-center bg-primary py-4">
      {toggleModal && <ProjectModal modalObj={modalObj} toggle={toggle} />}
      <h1 className=" text-4xl pt-5 font-semibold uppercase tracking-widest font-title">
        Projects
      </h1>
      <Divider bgColor="blue" />
      <motion.div className="grid gap-1 gap-y-10 grid-row grid-cols-fluid justify-items-center">
        {tempProjects.map((projectElem) => (
          <ProjectCard
            key={projectElem.name}
            name={projectElem.name}
            url={projectElem.url}
            imageSrc={projectElem.imageSrc}
            description={projectElem.description}
            githubUrl={projectElem.githubUrl}
            year={projectElem.year}
            toggle={toggle}
          />
        ))}
      </motion.div>
    </section>
  );
}
