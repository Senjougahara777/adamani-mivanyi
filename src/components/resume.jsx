import React from "react";
import { motion } from "framer-motion";
import {staggerContainer,navVariants} from "../utils/motion"

const Resume = () => {
  return (
    <motion.div variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}>
       <h1 className='sm:font-semibold lg:hidden uppercase'>Experience</h1>

      <motion.div  variants={navVariants}
        initial="hidden"
        whileInView="show" className="lg:flex lg:ml-6 lg:mb-6 group hover:bg-slate-900 group-hover:bg-opacity-10 hover:shadow-2xl hover:text-white hover:rounded-lg px-8 py-4">
        <div className="w-1/4 text-nowrap text-lg justify-start flex-grow text-gray-400 mr-5 group-hover:bg-slate-900 group-hover:bg-opacity-10">
          2004-2024
        </div>

        <div className="group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all ">
          <h3 className="group-hover:bg-slate-900 group-hover:bg-opacity-10 text-lg text-slate-300 group-hover:text-teal-500 transition-all">
            {" "}
            Adult Male
          </h3>
          <h5 className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-lg text-slate-500">
            Human Being{" "}
          </h5>
          <h5 className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-lg text-slate-500">
            {" "}
            Amateur Software Developer
          </h5>
          <p className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-base text-slate-500">
            {" "}
            As long as i have been on this planet one thing i am certain is that i am alive and i am doing well and i love my family and my God
           </p>
          <div className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all mt-4 grid grid-cols-5 gap-3 text-center group-[ text-xs ]:">
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              Too Stupid to code{" "}
            </div>
            
          </div>
        </div>
      </motion.div>

      <motion.div variants={navVariants}
        initial="hidden"
        whileInView="show" className="lg:flex lg:ml-6 lg:mb-6 group hover:bg-slate-900 group-hover:bg-opacity-10 hover:shadow-2xl hover:text-white hover:rounded-lg px-8 py-4">
        <div className="w-1/4 text-nowrap text-lg justify-start flex-grow text-gray-400 mr-5 group-hover:bg-slate-900 group-hover:bg-opacity-10">
          2014-2020
        </div>

        <div className="group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all ">
          <h3 className="group-hover:bg-slate-900 group-hover:bg-opacity-10 text-lg text-slate-300 group-hover:text-teal-500 transition-all">
            {" "}
            Secondary School
          </h3>
          <h5 className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-lg text-slate-500">
            Random Student{" "}
          </h5>
          <h5 className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-lg text-slate-500">
            {" "}
            
          </h5>
          <p className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-base text-slate-500">
            {" "}
            A relatively horrible experience with a sparce selection of fund meories not as mucha waste as the next detail but all right
          </p>
          <div className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all mt-4 grid grid-cols-5 gap-3 text-center group-[ text-xs ]:">
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
              Python{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              Go{" "}
            </div>
            
          </div>
        </div>
      </motion.div>

      <motion.div variants={navVariants}
        initial="hidden"
        whileInView="show" className="lg:flex lg:ml-6 lg:mb-6 group hover:bg-slate-900 group-hover:bg-opacity-10 hover:shadow-2xl hover:text-white hover:rounded-lg px-8 py-4">
        <div className="w-1/4 text-nowrap text-lg justify-start flex-grow text-gray-400 mr-5 group-hover:bg-slate-900 group-hover:bg-opacity-10">
          2020-2024
        </div>

        <div className="group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all ">
          <h3 className="group-hover:bg-slate-900 group-hover:bg-opacity-10 text-lg text-slate-300 group-hover:text-teal-500 transition-all">
            {" "}
            Bingham University Nigeria
          </h3>
          <h5 className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-lg text-slate-500">
            Computer Science Bachelor{" "}
          </h5>
          <h5 className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-lg text-slate-500">
            {" "}

          </h5>
          <p className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-base text-slate-500">
            {" "}
          A very very terrible experience one i would not like to have again, i cannot wait to leave that hellhole. I did do programming though
          </p>
          <div className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all mt-4 grid grid-cols-5 gap-3 text-center group-[ text-xs ]:">
          <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              HTML & CSS{" "}
            </div>
            <div className="py-2 rounded-2xl font-bold bg-teal-400/10 bg-opacity-50 text-teal-300 outline-none">
              {" "}
              JavaScript{" "}
            </div>
            
          </div>
        </div>
      </motion.div>

      <motion.div variants={navVariants}
        initial="hidden"
        whileInView="show" className="lg:flex lg:ml-6 lg:mb-6 group hover:bg-slate-900 group-hover:bg-opacity-10 hover:shadow-2xl hover:text-white hover:rounded-lg px-8 py-4">
        <div className="w-1/4 text-nowrap text-lg justify-start flex-grow text-gray-400 mr-5 group-hover:bg-slate-900 group-hover:bg-opacity-10">
          2023
        </div>

        <div className="group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all ">
          <h3 className="group-hover:bg-slate-900 group-hover:bg-opacity-10 text-lg text-slate-300 group-hover:text-teal-500 transition-all">
            {" "}
            International Training Fund(ITF)
          </h3>
          <h5 className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-lg text-slate-500">
            Intern (Industrial Training){" "}
          </h5>
          <h5 className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-lg text-slate-500">
            {" "}
            
          </h5>
          <p className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all text-base text-slate-500">
            {" "}
            Worked as an <span>UNPAID</span> intern at the industrial training fund Nigeria
          </p>
          <div className=" group-hover:bg-slate-900 group-hover:bg-opacity-10 group-hover:text-white  group-hover:rounded-lg transition-all mt-4 grid grid-cols-5 gap-3 text-center group-[ text-xs ]:">
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
              Python{" "}
            </div>
            
          </div>
        </div>
      </motion.div>

    <h2 className=" hover:text-teal-300 transition-all text-base mb-10 hidden lg:block"> Resume Archive </h2>
    </motion.div>
  );
};

export default Resume;
