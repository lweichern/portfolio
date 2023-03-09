import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleReset = () => {
    setIsClicked(false);
  };
  return (
    <motion.div
      whileTap={{ scale: 1.08 }}
      className={`fixed w-9 h-9 rounded-full border-2 border-accent z-10 left-8 top-8 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 cursor-none pointer-events-none hidden lg:block ${
        isClicked ? "scale-125" : "scale-100"
      }`}
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
      onMouseDown={handleClick}
      onMouseUp={handleReset}
    ></motion.div>
  );
}
