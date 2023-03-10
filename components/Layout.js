import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -300 },
};

export default function Layout({ children }) {
  return <motion.main className=" flex-1 bg-gray-100">{children}</motion.main>;
}
