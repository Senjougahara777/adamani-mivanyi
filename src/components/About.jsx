import React from 'react'
import { textVariant } from '../utils/motion'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textContainer,
  textVariant2,
  fadeIn,
  planetVariants,
  zoomIn,
  footerVariants,
} from "../utils/motion";

const About = () => {
  return (
    <motion.div variants={staggerContainer} initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }} className='mb-10 justify-center'>
    
    <motion.h1 variants = {textVariant2} className='sm:font-semibold lg:hidden'>ABOUT</motion.h1>

      <motion.p variants={textVariant2} className='text-lg mb-5 text-gray-400'>
        A young man an old man an aged man an experienced man a bad man a god man everything in one <span>Independent character</span> A computer scientist a thinker a foolish man <span>Cool highlighty</span> A good programmer.
      </motion.p>
      <motion.p variants={textVariant2} className=' text-lg mb-5 text-gray-400'>
        Currently Residing in Nigeria <span>pretty colors </span> I am an experienced python HTML CSS Javascript developer<span>Framewprks</span>i do full stack web dev on django, mobile development on react-native <span>its teal btw</span> I speak spanish too
      </motion.p>
      <motion.p variants={textVariant2} className=' text-lg mb-5 text-gray-400'>
        I can also do manual labour i fancy myself as a strong one im an active gym rat
      </motion.p>
    </motion.div>
  )
}

export default About