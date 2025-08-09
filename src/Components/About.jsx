import React from "react";
import { motion } from "framer-motion";
import { BiArrowFromTop, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

import { GoArrowDown } from "react-icons/go";

import image from "../../public/image.jpg";
const About = () => {
  return (
    <div
      className="mx-auto max-w-7xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start justify-center gap-3"
        >
          <h1 className="cursor-default bg-clip-text text-5xl md-text-6xl lg:text-8xl font-semibold text-center md:text-left text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
            Francesca Bowden
          </h1>
          <h3 className="cursor-default text-2xs font-light text-center md:text-left text-blue-200 opacity-70">
            Software & Game Developer | Bath-based | Creative Computing Graduate
          </h3>
          <p className="cursor-default text-2sm text-white text-center md:text-left text-pretty">
            {"I’m a passionate software and game developer based in Bath, with a Creative Computing degree from Bath Spa University (graduated 2025). I specialise in Unity game development, full-stack app projects, and creating engaging, user-focused digital experiences. I’m currently seeking junior or graduate developer roles where I can contribute my skills and continue to grow professionally."
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="transition duration-300 ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500"
                >
                  {word + " "}
                </span>
              ))}
          </p>

          <div className="flex gap-5 mt-3">
            <a href="https://github.com/FranBowden" target="_blank">
              <BiLogoGithub className="text-2xl md:text-3xl  text-blue-200 cursor-pointer hover:scale-[1.3] hover:text-blue-400 transiting-all duration-300 ease-in-out"></BiLogoGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/francescabowden"
              target="_blank"
            >
              <BiLogoLinkedin className="text-2xl md:text-3xl  text-blue-200 cursor-pointer hover:scale-[1.3] hover:text-blue-600 transiting-all duration-300 ease-in-out"></BiLogoLinkedin>
            </a>
          </div>
        </motion.div>

        <img
          src={image}
          alt="profile-image"
          className="w-[350px] md:w-[350px] rounded-full hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </motion.div>
    </div>
  );
};

export default About;
