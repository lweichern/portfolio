import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiVuejsFill } from "react-icons/ri";

export default function LanguageCard({ name, component }) {
  return (
    <motion.div
      className="w-40 p-3 bg-opacity-30 bg-white before:content-none before:bg-black before:h-10 before:w-40
  "
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      viewport={{ once: true }}
      whileTap={{ scale: 1.2 }}
    >
      {/* <RiVuejsFill /> */}
      <div className="mx-auto">{component}</div>
      {name}
    </motion.div>
  );
}
