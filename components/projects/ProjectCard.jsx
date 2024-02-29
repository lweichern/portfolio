import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineLiveTv } from "react-icons/md";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

export default function ProjectCard({
  name,
  imageSrc,
  description,
  url,
  year,
  githubUrl,
  toggle,
}) {
  console.log("URL", url);
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5, x: 5 }}
      className="neumorphism-shadow w-[80%] h-auto p-3 rounded-lg duration-300 shadow-md shadow-slate-900 flex flex-col group"
    >
      <motion.div transition={{ duration: 0.5 }}>
        <Image
          src={`/images/projects/${imageSrc}`}
          alt={`${name} Image`}
          width={500}
          height={500}
          className="w-full rounded-t-lg"
        />
      </motion.div>

      {/* <Image src={imageSrc} alt={`${name} Image`} fill /> */}
      <div className="flex justify-between items-center relative my-2">
        <motion.h2
          className="text-left text-3xl font-semibold text-secondary group-hover:text-2xl duration-300"
          transition={{ duration: 0.5 }}
        >
          {name}
        </motion.h2>
        <motion.h4
          className="text-accent font-bold group-hover:text-base duration-300 text-lg"
          transition={{ duration: 0.5 }}
        >
          {year}
        </motion.h4>
      </div>

      <motion.div
        className="text-left font-description my-2 flex-1 text-base translate-y-5 xl:group-hover:translate-y-0 duration-300"
        transition={{ duration: 0.5 }}
      >
        {description}
      </motion.div>

      <div className="flex gap-3 my-5 xl:translate-y-5 xl:opacity-0 xl:group-hover:translate-y-0 xl:group-hover:opacity-100 duration-300">
        <button
          className="flex justify-around gap-2 items-center p-2 text-accent bg-secondary font-bold cursor-pointer hover:text-secondary duration-150 bg-gradient-to-b from-slate-400 to-slate-50 hover:from-accent hover:to-accent"
          onClick={() => toggle(name)}
        >
          Read More
        </button>
        <Link href={githubUrl} target="_blank">
          <button className="flex justify-around gap-2 items-center p-2 text-accent bg-secondary font-bold cursor-pointer hover:text-secondary duration-150 bg-gradient-to-b from-slate-400 to-slate-50 hover:from-accent hover:to-accent">
            View Code <AiOutlineGithub className="hidden md:block" />
          </button>
        </Link>
        {url !== null && (
          <Link href={url} target="_blank">
            <button className="flex justify-around gap-2 items-center p-2 text-accent bg-secondary font-bold cursor-pointer hover:text-secondary duration-150 bg-gradient-to-b from-slate-400 to-slate-50 hover:from-accent hover:to-accent">
              Live Site <MdOutlineLiveTv className="hidden md:block" />
            </button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
