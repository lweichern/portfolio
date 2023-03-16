import React from "react";
import SocialsIconsCards from "./SocialIconsCard";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { useMediaQuery } from "@react-hook/media-query";

const className = "w-5 h-5 text-slate-300 duration-300 group-hover:scale-125";

const icons = [
  {
    name: "linkedIn",
    component: <AiOutlineLinkedin className={className} />,
    url: "https://www.linkedin.com/in/weichernlim/",
  },
  {
    name: "github",
    component: <AiOutlineGithub className={className} />,
    url: "https://github.com/lweichern",
  },
  {
    name: "email",
    component: <AiOutlineMail className={className} />,
    url: "/",
  },
  {
    name: "facebook",
    component: <AiOutlineFacebook className={className} />,
    url: "https://www.facebook.com/lim.weichern.3/",
  },
];

export default function SocialIcons() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const container = {
    visible: {
      opacity: 1,
      y: -20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: isSmallScreen ? 3 : 4,
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
      y: 20,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="mt-4">
      <motion.div
        className="flex gap-3 justify-center flex-wrap mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {icons.map((elem) => {
          return (
            <SocialsIconsCards
              key={elem.name}
              component={elem.component}
              url={elem.url}
              variantItem={item}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
