import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

export default function ScrollIcon() {
  return (
    <Link to="languagesSection" offset={-85}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 4.5, type: "spring" }}
        className="absolute right-12 top-36 md:right-24 lg:right-32 xl:right-48 xl:top-[25rem] bg-slate-400 p-3 rounded-full w-20 h-20 md:w-32 md:h-32 cursor-pointer"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 4.5 }}
          className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-primary font-semibold"
        >
          <FaArrowDown className="text-2xl mx-auto animate-bounce lg:text-3xl" />
          <motion.div className=" text-xs md:text-base lg:text-xl">
            Scroll <br />
            Down
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
