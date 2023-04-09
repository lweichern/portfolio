import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 5.3 }}
      className=" px-3 lg:w-[50%] text-center lg:text-left"
    >
      <Link href="mailto:lweichern@gmail.com">
        <div className="fixed bottom-8 left-8 md:bottom-12 md:left-12 lg:left-16 bg-secondary text-primary text-xl w-24 h-24 font-semibold rounded-full flex justify-center items-center text-center opacity-80 neumorphism-shadow-contact-me cursor-pointer hover:bg-primary hover:text-secondary duration-150 animate-bounce-slow">
          Contact Me
        </div>
      </Link>
    </motion.div>
  );
}
