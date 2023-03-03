import React from "react";
import { motion } from "framer-motion";

export default function Overlay({ children, toggle }) {
  return (
    <motion.div
      className="fixed top-0 left-0 bg-black w-screen h-screen opacity-90 z-[11]"
      onClick={() => toggle({})}
    >
      {children}
    </motion.div>
  );
}
