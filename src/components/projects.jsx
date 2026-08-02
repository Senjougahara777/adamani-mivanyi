import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, navVariants } from "../utils/motion";

const ProjectCard = ({ href, image, title, description, tags }) => {
  const content = (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex flex-col gap-4 sm:flex-row sm:items-start lg:ml-6 lg:mb-6 group hover:bg-slate-900 hover:bg-opacity-10 hover:shadow-2xl hover:text-white cursor-pointer hover:rounded-lg px-4 py-4 sm:px-8 transition-all"
    >
      {/* Fixed-size box that never grows with screen width, so the image
          can only scale proportionally inside it — no more stretching. */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="min-w-0">
        <h3 className="text-lg text-slate-300 group-hover:text-teal-500 transition-all break-words">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-slate-500 group-hover:text-white transition-all mt-1">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 text-xs sm:text-sm outline-none whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

const PROJECTS = [
  {
    href: "https://ticketpocket.it.com",
    image: "public/assets/default1.png",
    title: "The Magnum Opus",
    description:
      "Fully functional ticketing platform ",
    tags: [ "React", "Django", "PostgresSql"],
  },
  {
    href: "https://senjougahara.pythonanywhere.com/",
    image: "public/assets/default2.png",
    title: "Form Collection/Survey Management System",
    description:
      "A system built to curb ITF (Industrial Training Fund)'s problem of manual data collection and sorting difficulties that come with the pre-established file collection system.",
    tags: ["Python", "HTML & CSS", "JavaScript", "Django"],
  },
  {
    image: "public/assets/default3.png",
    title: "Don't Even Know the Details of This One",
    description:
      "Forced to build this as an overworked intern — it's more of a shell for a customizable web application.",
    tags: ["HTML & CSS", "Python", "Bootstrap", "Django"],
  },
  {
    image: "public/assets/default4.png",
    title: "The Portfolio Site",
    description:
      "I wonder what could be said about this one — heavily inspired by Brittany Chiang's portfolio site, some would even say an homage to it.",
    tags: [ "React","Tailwind CSS"],
  },
  {
    href: "https://girls-reach-out.web.app",
    image: "public/assets/default5.jpeg",
    title: "Unidentified NGO",
    description:
      "I wonder what could be said about this one — heavily inspired by Brittany Chiang's portfolio site, some would even say an homage to it.",
    tags: ["HTML & CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full"
    >
      <h1 className="text-base sm:font-semibold lg:hidden uppercase mb-4">
        Projects
      </h1>

      <div className="flex flex-col gap-4 lg:gap-0">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <h2 className="hover:text-teal-300 text-base hidden lg:block mt-4">
        Projects Archive
      </h2>
    </motion.div>
  );
};

export default Projects;