import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalObj, setModalObj] = useState({});

  const toggle = (projectName) => {
    const project = projects.find((elem) => elem.name == projectName);
    setModalObj(project);
    setToggleModal(!toggleModal);
  };

  const projects = [
    {
      name: "MovieNow",
      url: "https://lweichern.github.io/Movie-Now-TS/",
      imageSrc: "project 6.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae facilis dolores, inventore id expedita earum suscipit recusandae non ducimus sit laudantium, odio laboriosam, mollitia animi voluptate? Iusto, ex veritatis.",
      year: "2022",
      languages: ["React JS", "HTML", "CSS", "React Redux", "TypeScript"],
    },
    {
      name: "Travlog",
      url: "https://lweichern.github.io/travlog/",
      imageSrc: "project 5.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae facilis dolores, inventore id expedita earum suscipit recusandae non ducimus sit laudantium, odio laboriosam, mollitia animi voluptate? Iusto, ex veritatis.",
      year: "2022",
      languages: ["React JS", "HTML", "CSS", "React Redux"],
    },
    {
      name: "Tenzies",
      url: "https://lweichern.github.io/tenzies/",
      imageSrc: "project 4.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae facilis dolores, inventore id expedita earum suscipit recusandae non ducimus sit laudantium, odio laboriosam, mollitia animi voluptate? Iusto, ex veritatis.",
      year: "2022",
      languages: ["React JS", "HTML", "CSS"],
    },
    {
      name: "NEA 360° Virtual Tour",
      url: "https://nea-wolbachia-a62b4.web.app/",
      imageSrc: "project 3.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae facilis dolores, inventore id expedita earum suscipit recusandae non ducimus sit laudantium, odio laboriosam, mollitia animi voluptate? Iusto, ex veritatis.",
      year: "2021",
      languages: ["HTML", "CSS", "Javascript", "Firebase"],
    },
    {
      name: "Wordle Clone",
      url: "https://lweichern.github.io/wordle/",
      imageSrc: "project 2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae facilis dolores, inventore id expedita earum suscipit recusandae non ducimus sit laudantium, odio laboriosam, mollitia animi voluptate? Iusto, ex veritatis.",
      year: "2021",
      languages: ["HTML", "CSS", "Javascript", "Firebase"],
    },
    {
      name: "To Do List",
      url: "https://lweichern.github.io/Event-Memo/",
      imageSrc: "project 1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae facilis dolores, inventore id expedita earum suscipit recusandae non ducimus sit laudantium, odio laboriosam, mollitia animi voluptate? Iusto, ex veritatis.",
      year: "2021",
      languages: ["HTML", "CSS", "Javascript", "Firebase"],
    },
  ];
  return (
    <section id="projectsSection" className="text-center bg-primary py-4">
      {toggleModal && <ProjectModal modalObj={modalObj} toggle={toggle} />}
      <h1 className=" text-4xl py-5 font-semibold uppercase tracking-widest font-title">
        Projects
      </h1>
      <motion.div className="grid gap-1 gap-y-10 grid-row grid-cols-fluid justify-items-center">
        {projects.map((projectElem) => (
          <ProjectCard
            key={projectElem.name}
            name={projectElem.name}
            url={projectElem.url}
            imageSrc={projectElem.imageSrc}
            description={projectElem.description}
            year={projectElem.year}
            toggle={toggle}
          />
        ))}
      </motion.div>
    </section>
  );
}
