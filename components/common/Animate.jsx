import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Animate() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  useEffect(() => {
    console.log("Y progress: ", scrollYProgress);
    console.log("Scale: ", scale);
  }, []);

  return (
    <div className="wrapper w-20 h-20">
      <motion.div className="container"></motion.div>
    </div>
  );
}
