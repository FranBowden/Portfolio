import React from "react";
import { motion } from "framer-motion";
import { BiArrowFromTop, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

import { GoArrowDown } from "react-icons/go";

import image from "../../public/profile.jpeg";
const About = () => {
  return (
    <div
      className="mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center"
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
          <h1 className="bg-clip-text text-5xl md-text-6xl lg:text-8xl font-semibold text-center md:text-left text-transparent bg-gradient-to-r from-violet-600 to-purple-800">
            Francesca Bowden
          </h1>
          {/*   <h3 className="text-xl md-text-2xl lg:text-3xl font-lgiht text-center md:text-left text-white">
            Software Engineer
          </h3> */}
          <p className="text-2sm text-white text-center md:text-left text-pretty">
            Welcome to my portfolio! I'm a Creative Computing student at Bath
            Spa University graduating in June 2025. This portfolio highlights
            both my university projects and personal work.
          </p>
          <div className="flex gap-5 mt-3">
            <a href="https://github.com/FranBowden" target="_blank">
              <BiLogoGithub className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-violet-600 transiting-all duration-300 ease-in-out"></BiLogoGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/francescabowden"
              target="_blank"
            >
              <BiLogoLinkedin className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-violet-600 transiting-all duration-300 ease-in-out"></BiLogoLinkedin>
            </a>
          </div>
        </motion.div>

        <img
          src={image}
          className="w-[250px] md:w-[350px] rounded-full border-4 border-white shadow-[0px_0px_15px] shadow-violet-500/60 hover:scale-105  transition-all duration-500"
          alt="profile-image"
        />
      </motion.div>
    </div>
  );
};

export default About;
