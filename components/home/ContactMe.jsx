import React from "react";
import ContactsCards from "./ContactsCards";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";

const className = "w-5 h-5 text-slate-300 duration-300 group-hover:scale-125";

const contacts = [
  {
    name: "linkedIn",
    component: <AiOutlineLinkedin className={className} />,
  },
  {
    name: "github",
    component: <AiOutlineGithub className={className} />,
  },
  {
    name: "email",
    component: <AiOutlineMail className={className} />,
  },
  {
    name: "facebook",
    component: <AiOutlineFacebook className={className} />,
  },
];

const container = {
  visible: {
    opacity: 1,
    y: -20,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 2.5,
      default: { ease: "easeInOut" },
    },
  },
  hidden: {
    opacity: 0,
    x: 1,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function ContactMe() {
  return (
    <div>
      {/* <div className="text-4xl py-5 text-black text-center font-semibold uppercase tracking-widest">
        Contact Me
      </div> */}
      <motion.div
        className="flex gap-3 justify-center flex-wrap mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {contacts.map((elem) => {
          return (
            <ContactsCards
              key={elem.name}
              component={elem.component}
              variantItem={item}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
