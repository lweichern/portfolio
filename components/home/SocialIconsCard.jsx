import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SocialsIconsCards({
  name,
  component,
  url,
  variantItem,
}) {
  return (
    <Link href={url} target="_blank">
      <motion.div
        className="group border-slate-300 border-solid border-2 text-primary w-fit p-3 cursor-pointer duration-300 rounded-[50%] hover:rounded-xl
    "
        variants={variantItem}
      >
        <div>{component}</div>
      </motion.div>
    </Link>
  );
}
