import React from "react";
import Overlay from "../common/Overlay";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function ProjectModal({ modalObj, toggle }) {
  return (
    <>
      <Overlay toggle={toggle} />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[12] w-[90%] md:w-[60%] p-6 bg-primary rounded-lg"
      >
        <div className="flex justify-between items-end">
          <motion.h2
            transition={{ duration: 0.5, delay: 0.2 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-3xl text-left"
          >
            {modalObj.name}
          </motion.h2>
          <motion.h4
            className="text-xl text-accent text-left"
            transition={{ duration: 0.5, delay: 0.2 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          >
            {modalObj.year}
          </motion.h4>
        </div>

        <motion.div
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
        >
          <Image
            src={`/images/projects/${modalObj.imageSrc}`}
            alt={`${modalObj.name} Image`}
            width={500}
            height={500}
            className=" w-auto h-auto rounded-lg my-4"
          />
        </motion.div>

        <motion.div
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-left py-2"
        >
          {modalObj.description}
        </motion.div>
        <motion.ul
          className="flex gap-3 text-accent font-semibold"
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
        >
          {modalObj.languages.map((lang) => (
            <li key={lang.name}>{lang}</li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
}
