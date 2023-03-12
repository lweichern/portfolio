import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialIcons from "./SocialIcons";
import ScrollIcon from "./ScrollIcon";
import Overview from "../overview/Overview";
import { useMediaQuery } from "@react-hook/media-query";

export default function Header() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth);
  //   }

  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   console.log("windowWidth: ", windowWidth);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const [text, helper] = useTypewriter({
    words: ["<EAT />", "<SLEEP />", "<CODE />", "<REPEAT />"],
    delaySpeed: 1000,
    loop: true,
  });
  return (
    // max-sm:flex-col-reverse
    <section
      id="headerSection"
      className=" bg-primary px-3 pb-6 text-center gap-7 items-center lg:flex"
    >
      <div className="h-screen justify-center items-center flex flex-col lg:w-[40%]">
        {/* <ScrollIcon /> */}
        <motion.div
          initial={
            isSmallScreen ? { opacity: 0, y: 20 } : { opacity: 0, x: 20 }
          }
          animate={isSmallScreen ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: isSmallScreen ? 2 : 3 }}
          className=""
        >
          <h1 className=" text-[#c7c9ca] text-4xl font-title md:text-6xl">
            LIM WEI CHERN
          </h1>
          <h1 className="text-2xl md:text-3xl text-accent">
            <span> {text}</span>
            <Cursor />
          </h1>
        </motion.div>
        <SocialIcons />
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full lg:rotate-90 lg:w-[10%] lg:hidden" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="w-[2px] h-[500px] bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block"
      />
      <Overview />
    </section>
  );
}
