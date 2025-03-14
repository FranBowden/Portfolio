import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../Data/educationData";

const Education = () => {
  return (
    <div
      id="Education"
      className="mx-auto max-w-7xl p-4 sm:p-10 text-violet-400 flex flex-col gap-10 sm:gap-16 items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-semibold text-white"
      >
        Education
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 w-full"
      >
        {educationData.map((education) => (
          <div className="text-violet-400 bg-white flex flex-col gap-3 p-6 flex-grow rounded-lg  ">
            <h3 className="text-3xl font-semibold">{education.school}</h3>
            <h3 className="text-xl ">{education.course}</h3>
            <h3 className="italic text-sm">{education.date}</h3>

            <h3 className="">Modules Taken:</h3>
            <ul className="flex gap-1 flex-wrap justify-start">
              {education.modules.map((module, index) => (
                <li
                  key={index}
                  className="text-white text-sm inline-flex px-2 py-1 bg-violet-500 rounded hover:bg-violet-700 transition-all duration-300"
                >
                  {module}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
