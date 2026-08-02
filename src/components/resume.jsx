import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, navVariants } from "../utils/motion";

const ResumeItem = ({ period, title, subtitle, description, tags }) => (
  <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="flex flex-col gap-2 sm:flex-row sm:items-start lg:ml-6 lg:mb-6 group hover:bg-slate-900 hover:bg-opacity-10 hover:shadow-2xl hover:text-white hover:rounded-lg px-4 py-4 sm:px-8 transition-all"
  >
    <div className="text-sm sm:text-lg text-gray-400 sm:w-1/4 shrink-0">
      {period}
    </div>

    <div className="min-w-0">
      <h3 className="text-lg text-slate-300 group-hover:text-teal-500 transition-all">
        {title}
      </h3>
      {subtitle && (
        <h5 className="text-base sm:text-lg text-slate-500 group-hover:text-white transition-all">
          {subtitle}
        </h5>
      )}
      <p className="text-sm sm:text-base text-slate-500 group-hover:text-white transition-all mt-1">
        {description}
      </p>

      {tags?.length > 0 && (
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
      )}
    </div>
  </motion.div>
);

const RESUME_ITEMS = [
  {
    period: "2004–Present",
    title: "Adult Male",
    subtitle: "Human Being · Amateur Software Developer",
    description:
      "As long as I've been on this planet, one thing I'm certain of: I'm alive, I'm doing well, and I love my family and my God.",
    tags: [],
  },
  {
    period: "2014–2020",
    title: "Secondary School",
    subtitle: "Student",
    description:
      "A relatively rough experience with a sparse selection of fond memories — not the biggest waste of time, but not much more than that either.",
    tags: ["", "", "", ""],
  },
  {
    period: "2020–2024",
    title: "Bingham University, Nigeria",
    subtitle: "B.Sc. Computer Science",
    description:
      "A genuinely difficult stretch that I wouldn't want to repeat — but I did get real programming experience out of it.",
    tags: ["", ""],
  },
  {
    period: "2023",
    title: "Industrial Training Fund (ITF)",
    subtitle: "Intern, Industrial Training (Unpaid)",
    description: "Worked as an unpaid intern at the Industrial Training Fund, Nigeria.",
    tags: ["", "", ""],
  },
];

const Resume = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full"
    >
      <h1 className="text-base sm:font-semibold lg:hidden uppercase mb-4">
        Experience
      </h1>

      <div className="flex flex-col gap-4 lg:gap-0">
        {RESUME_ITEMS.map((item) => (
          <ResumeItem key={item.title} {...item} />
        ))}
      </div>

      <h2 className="hover:text-teal-300 transition-all text-base mb-10 hidden lg:block mt-4">
        Resume Archive
      </h2>
    </motion.div>
  );
};

export default Resume;