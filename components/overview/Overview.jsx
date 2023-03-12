import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 3 }}
      className="py-8 px-3 lg:w-[50%] text-center lg:text-left"
    >
      <h1 className=" text-4xl pb-5 font-semibold uppercase tracking-widest font-title ">
        Overview
      </h1>

      <h3>
        <p>
          Hi, I'm Wei Chern, a skilled web developer with 3 years of experience
          building responsive and user-friendly websites. I specialize in
          front-end development, and I'm proficient in HTML, CSS, JavaScript,
          and React, as well as several popular frameworks like Vue and
          Tailwind. Besides, I also have experience with backend frameworks such
          as NodeJS and NestJS.
        </p>
        <br />
        <p>
          Personally, I like working on challenging projects like e-commerce
          site with complicated functionalities. Besides, I like building
          websites with intuitive user interfaces that provides exquisite user
          experience.
        </p>
        <br />
        <p>
          If you're interested in learning more about my experience and skills,
          or if you have a project you'd like to discuss, please don't hesitate
          to get in touch!
        </p>
      </h3>
    </motion.div>
  );
}
