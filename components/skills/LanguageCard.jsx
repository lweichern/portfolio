import React from "react";
import { motion } from "framer-motion";

export default function LanguageCard({ name, component }) {
  return (
    <motion.div
      className="w-40 p-3 bg-opacity-30 bg-gray-400 rounded-sm flex flex-col justify-center items-center before:content-none before:bg-black before:h-10 before:w-40
  "
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      viewport={{ once: true }}
      whileTap={{ scale: 1.2 }}
    >
      {/* <RiVuejsFill /> */}
      <div className="mx-auto">{component}</div>
      <div className=" text-xl font-semibold">{name}</div>
    </motion.div>
  );
}
