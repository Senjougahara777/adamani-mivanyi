import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
  textContainer,
  textVariant2,
  fadeIn,
  planetVariants,
  zoomIn,
  footerVariants,
} from "../utils/motion";

import {} from '../utils/themeContext'

const Hero = () => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h3
          variants={textVariant2}
          className=" pt-10 mb-3 text-3xl font-bold text-gray-600 hover:text-white transition-all"
        >
          Mivanyi Adamani
        </motion.h3>
        <motion.h4
          variants={textVariant2}
          className="mb-3 text-xl font-semibold  text-gray-700 hover:text-gray-300 transition-all"
        >
          Unemployed/Freelance software developer{" "}
        </motion.h4>
        <motion.h5
          variants={textVariant2}
          className=" text-gray-600 text-sm hover:text-gray-300"
        >
          {" "}
          I build fancy software for a lot of different stuff
        </motion.h5>
      </motion.div>

      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="lg:block hidden lg:mt-10 lg:pt-4 lg:mb-60"
      >
        <div>
          <div className="group flex items-center gap-10 text-gray-600 hover:text-white transition-all">
            <div className="h-1 w-10 bg-gray-600 rounded-md hover:w-40 hover:bg-white transition-all group-hover:w-40 group-hover:bg-white" />
            <a className="mb-2 group-hover:text-white text-xs font-bold">
              ABOUT
            </a>
          </div>

          <div className="group flex items-center gap-10 text-gray-600 hover:text-white transition-all">
            <div className="h-1 w-10 bg-gray-600 rounded-md hover:w-40 hover:bg-white transition-all group-hover:w-40 group-hover:bg-white" />
            <a className="mb-2 group-hover:text-white text-xs font-bold">
              EXPERIENCE
            </a>
          </div>

          <div className="group flex items-center gap-10 text-gray-600 hover:text-white transition-all">
            <div className="h-1 w-10 bg-gray-600 rounded-md hover:w-40 hover:bg-white transition-all group-hover:w-40 group-hover:bg-white" />
            <a className="mb-2 group-hover:text-white text-xs font-bold">
              PROJECTS
            </a>
          </div>
        </div>
      </motion.div>

      <div className=" lg:mt-40 mb-20 ">
        <div>
          <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}>
            <span className="text-lg">Please Hire Me</span>
          </motion.p>
        </div>

        <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} className="flex items-center gap-4 list-none cursor-pointer">
          <li>
            <a href="https://mail.google.com/mail/">
              <img src="src/assets/gmail-svgrepo-com.svg" />
            </a>
          </li>

          <li>
            <img src="src/assets/instagram-167-svgrepo-com.svg" />
          </li>

          <li>
            <img src="src/assets/whatsapp-svgrepo-com.svg" />
          </li>

          <li>
            <img src="src/assets/youtube-svgrepo-com.svg" />
          </li>

          <li className=" pb-2">
            <a href="https://github.com/Senjougahara777/">
              <GitHubIcon />
            </a>
          </li>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
