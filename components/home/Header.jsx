import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ContactMe from "./ContactMe";
import ScrollIcon from "./ScrollIcon";

export default function Header() {
  const [text, helper] = useTypewriter({
    words: ["<EAT />", "<SLEEP />", "<CODE />", "<REPEAT />"],
    delaySpeed: 1000,
    loop: true,
  });
  return (
    // max-sm:flex-col-reverse
    <section
      id="headerSection"
      className=" bg-primary px-3 py-6 flex flex-col text-center gap-7 h-screen justify-center"
    >
      <ScrollIcon />
      <motion.div
        layoutId="picture"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="mx-auto"
      >
        <Image
          src="/images/profile.png"
          height={200}
          width={200}
          alt="Profile"
        ></Image>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className=""
      >
        <h1 className=" text-[#c7c9ca] text-6xl font-title">LIM WEI CHERN</h1>
        <h1 className="text-3xl text-accent">
          <span> {text}</span>
          <Cursor cursorColor="" />
        </h1>
      </motion.div>
      <ContactMe />
    </section>
  );
}
