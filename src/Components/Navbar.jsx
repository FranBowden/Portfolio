import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full  drop-shadow-md bg-violet-400 z-50">
      <nav className="max-w-7xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between text-white">
        <a
          href="#about"
          className=" text-transparent bg-gradient-to-l from-violet-700 to-indigo-800 text-xl md:text-2xl font-semibold bg-clip-text hover:scale-110 transition-all duration-300"
        >
          Francesca Bowden
        </a>
        <ul className="hidden md:flex gap-10">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about">About</a>
          </li>
          {/*
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#Education">Education</a>
          </li>*/}
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#projects">Projects</a>
          </li>

          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiMenu className="text-3xl"></BiMenu>
        </button>

        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-violet-400 space-y-5 py-10 text-center">
            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">About</span>
              </a>
            </li>

            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity">
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">Projects</span>
              </a>
            </li>

            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">Contact</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
