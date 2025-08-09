import React from "react";
import { motion } from "framer-motion";
import { skillData } from "../Data/skillData";

const Skills = () => {
  return (
    <div className="bg-zinc-800 pb-[60px]" id="skills">
      <div className="mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 p-1"
        >
          My Skill Set
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {skillData.map((skillCategory, index) => (
            <div key={index} className="flex flex-col cursor-default">
              <h3 className="text-xl font-semibold text-blue-200 mb-4 border-l-4 border-blue-500 pl-3">
                {skillCategory.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {skillCategory.items.map((item, i) => (
                  <li
                    key={i}
                    className="inline-block bg-gradient-to-r from-blue-500 to-indigo-700 rounded-md px-3 py-1.5 text-sm text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-800 transition-colors duration-300 shadow-sm shadow-blue-700/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
