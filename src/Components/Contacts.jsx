import React from "react";
import { motion } from "framer-motion";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const Contacts = () => {
  return (
    <div className="mx-auto w-full min-h-[20vh] bg-white" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className=" mx-auto mt-20 flex items-center justify-center flex-col gap-8 sm:gap-12"
      >
        <a href="mailto:francescalbowden@gmail.com">
          <button className="mt-10  hover:bg-violet-600 hover:scale-110  transition-all duration-300 text-white relative overflow-hidden group rounded-md bg-violet-500  p-5">
            Contact me here
          </button>
        </a>

        <p className="text-gray-600"> Or check out my social media below!</p>
        <div class="flex space-x-3  text-gray-400">
          <a href="https://github.com/FranBowden">
            <BiLogoGithub className="text-4xl hover:text-violet-600 hover:scale-110  hover:translate-y-[-5px]  transition-all duration-300" />
          </a>

          <a href="https://www.linkedin.com/in/francesca-bowden-474b72259/">
            <BiLogoLinkedin className="text-4xl hover:text-violet-600 hover:scale-110  hover:translate-y-[-5px]  transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/franbowden_/">
            <BiLogoInstagram className="text-4xl hover:text-violet-600 hover:scale-110 hover:translate-y-[-5px]  transition-all duration-300" />
          </a>
        </div>

        <footer className="w-full border-t bg-gray-100 border-gray-100 p-10">
          <div className="text-gray-400 text-center text-sm sm:text-base hover:text-gray-300 transition-colors">
            ©2025 Francesca Bowden
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Contacts;
