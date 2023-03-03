import React from "react";
import Overlay from "../common/Overlay";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectModal({ modalObj, toggle }) {
  return (
    <>
      <Overlay toggle={toggle} />
      <motion.div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[12] w-[90%] p-6 bg-primary rounded-lg">
        <div className="flex justify-between items-end">
          <motion.h2
            layoutId={modalObj.name}
            transition={{ duration: 0.5 }}
            className="text-3xl text-left"
          >
            {modalObj.name}
          </motion.h2>
          <motion.h4
            layoutId={`${modalObj.name}${modalObj.year}`}
            className="text-xl text-accent text-left"
            transition={{ duration: 0.5 }}
          >
            {modalObj.year}
          </motion.h4>
        </div>

        <Image
          src={`/images/projects/${modalObj.imageSrc}`}
          alt={`${modalObj.name} Image`}
          width={300}
          height={500}
          className=" w-auto h-auto rounded-lg my-4"
        />
        <motion.div
          layoutId={`${modalObj.name}description`}
          transition={{ duration: 0.5 }}
          className="text-left py-2"
        >
          {modalObj.description}
        </motion.div>
        <ul className="flex gap-3 text-accent font-semibold">
          {modalObj.languages.map((lang) => (
            <li key={lang.name}>{lang}</li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
