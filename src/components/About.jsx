import React from 'react'
import { motion } from "framer-motion";
import {
  staggerContainer,
  textVariant2,
} from "../utils/motion";

const HighlightSpan = ({ children }) => (
  <span className='font-bold text-white transition-colors duration-300 hover:text-teal-400 cursor-default'>
    {children}
  </span>
);

const aboutParagraphs = [
  {
    id: "identity",
    text: (
      <>
        A young man, an old man, an aged man, an experienced man, a bad man, a good man — everything in one{" "}
        <HighlightSpan>Independent character</HighlightSpan>. A computer scientist, a thinker, a fool at times{" "}
        <HighlightSpan>Cool highlighty</HighlightSpan>, and a good programmer.
      </>
    ),
  },
  {
    id: "stack",
    text: (
      <>
        Currently residing in Nigeria <HighlightSpan>pretty colors</HighlightSpan>. I'm an experienced Python, HTML, CSS, and JavaScript developer{" "}
        <HighlightSpan>Frameworks</HighlightSpan>. I do full-stack web development with Django and mobile development with React Native{" "}
        <HighlightSpan>its teal btw</HighlightSpan>. Ich sprechen bissen <HighlightSpan>Deutsch</HighlightSpan> und <HighlightSpan>Spanisch</HighlightSpan>.
      </>
    ),
  },
  {
    id: "physical",
    text: "I've got a fairly average build not particularly muscular, but not out of shape either. There's a bit of softness around my midsection, and my shoulders aren't especially broad or tapered. My posture's a little rounded from sitting at a screen too much. I'm somewhere in the mid-to-average height and weight range for a guy. Nothing dramatic either way just a pretty typical physique.",
  },
];

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='mb-10 justify-center'
    >
      <motion.h1 variants={textVariant2} className='sm:font-semibold lg:hidden'>
        ABOUT
      </motion.h1>

      {aboutParagraphs.map((paragraph) => (
        <motion.p
          key={paragraph.id}
          variants={textVariant2}
          className='text-lg mb-5 text-gray-400'
        >
          {paragraph.text}
        </motion.p>
      ))}
    </motion.div>
  )
}

export default About