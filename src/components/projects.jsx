import React from "react";
import { motion } from "framer-motion";
import {staggerContainer,navVariants} from "../utils/motion"

const Projects = () => {
  return (
    <motion.div variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}>
      <h1 className="sm:font-semibold lg:hidden uppercase">Projects</h1>

<a href="https://senjougahara.pythonanywhere.com/">
      <motion.div onClick="window.location.href='https://example.com'" variants={navVariants}
        initial="hidden"
        whileInView="show"  className="lg:flex lg:ml-6 lg:mb-6 group hover:bg-slate-900 group-hover:bg-opacity-10 hover:shadow-2xl hover:text-white cursor-pointer hover:rounded-lg px-8 py-4">
        <div onClick="window.location.href='https://example.com'" className="w-1/4 text-nowrap text-lg justify-start flex-grow text-gray-400 mr-5 group-hover:bg-slate-900 group-hover:bg-opacity-10">
          <img src="src/assets/default2.png" className=" lg:w-full lg:h-11" />
        </div>

        <div onClick="window.location.href='https://example.com'" className="group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all ">
          <h3 className="group-hover:bg-slate-900 group-hover:bg-opacity-10 text-lg text-slate-300 group-hover:text-teal-500 transition-all">
            {" "}
            Form Collection/Survey Management System
          </h3>

          <p className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-base text-slate-500">
            {" "}
            A system built to curb ITF(INDUTRIAL TRAINING FUND)'s problem of manual data collection and sorting difficulties that come with the pre established file collection system 
          </p>
          <div onClick="window.location.href='https://example.com'" className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all mt-4 grid grid-cols-5 gap-3 text-center group-[ text-xs ]:">
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              Python{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              HTML & CSS{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              JavaScript{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              Django{" "}
            </div>
            
          </div>
        </div>
      </motion.div>
      </a>

      <motion.div variants={navVariants}
        initial="hidden"
        whileInView="show" className="lg:flex lg:ml-6 lg:mb-6 group hover:bg-slate-900 group-hover:bg-opacity-10 hover:shadow-2xl hover:text-white hover:rounded-lg px-8 py-4">
        <div className="w-1/4 text-nowrap text-lg justify-start flex-grow text-gray-400 mr-5 group-hover:bg-slate-900 group-hover:bg-opacity-10">
          <img src="src/assets/default3.png" className=" lg:w-full lg:h-11" />
        </div>

        <div className="group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all ">
          <h3 className="group-hover:bg-slate-900 group-hover:bg-opacity-10 text-lg text-slate-300 group-hover:text-teal-500 transition-all">
            {" "}
            Don,t Even Know the details of this one
          </h3>

          <p className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-base text-slate-500">
            {" "}
            Forced to build this as an overworked intern its more of a shell for a customizable web application.
          </p>
          <div className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all mt-4 grid grid-cols-5 gap-3 text-center group-[ text-xs ]:">
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              HTML & CSS{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              Python{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              Bootstrap{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              Django{" "}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={navVariants}
        initial="hidden"
        whileInView="show" className="lg:flex lg:ml-6 lg:mb-6 group hover:bg-slate-900 group-hover:bg-opacity-10 hover:shadow-2xl hover:text-white hover:rounded-lg px-8 py-4">
        <div className="w-1/4 text-nowrap text-lg justify-start flex-grow text-gray-400 mr-5 group-hover:bg-slate-900 group-hover:bg-opacity-10">
          <img src="src/assets/default4.png" className=" lg:w-full lg:h-11" />
        </div>

        <div className="group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all ">
          <h3 className="group-hover:bg-slate-900 group-hover:bg-opacity-10 text-lg text-slate-300 group-hover:text-teal-500 transition-all">
            {" "}
            The Portfolio site
          </h3>

          <p className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-base text-slate-500">
            {" "}
            I wonder what could be said about this one apar, Heavily Inspired by a Brittany Changs portfolio site some would even say an infringement on intellectual propeerty
          </p>
          <div className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all mt-4 grid grid-cols-5 gap-3 text-center group-[ text-xs ]:">
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              HTML & CSS{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              React{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              JavaScript{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              Tailwind CSS{" "}
            </div>
          </div>
        </div>
      </motion.div>

      <h2 className="hover:text-teal-300 text-base hidden lg:block">
        Projects Archive
      </h2>
    </motion.div>
  );
};

export default Projects;
