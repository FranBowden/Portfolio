import React from "react";
import { motion } from "framer-motion";
import { projectData } from "../Data/projectData";
const Projects = () => {
  return (
    <div className="bg-zinc-900 pb-[60px] " id="projects">
      <div className="mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-white p-1"
        >
          Recent Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {projectData.map((project) => (
            <a
              href={project.link}
              key={project.id}
              target="_blank"
              className="flex flex-col rounded-xl bg-violet-700 overflow-hidden cursor-pointer hover:bg-violet-900 transition-all duration-300 hover:scale-105"
            >
              <img src={project.image} />

              <div className="flex flex-col gap-3 bg-grey-900 p-5 transition-colors duration-300 hover:bg-violet-900 flex-grow">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-100">{project.description}</p>
                <div className="flex gap-3 flex-wrap mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
