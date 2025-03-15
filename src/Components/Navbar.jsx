import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full  drop-shadow-md bg-zinc-900 z-50">
      <nav className="max-w-7xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between text-white">
        <a
          href="#about"
          className=" text-transparent bg-white text-xl md:text-2xl font-semibold bg-clip-text hover:scale-110 transition-all duration-300"
        >
          Portfolio
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
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-zinc-900 text-center">
            <li className="group p-2 px-10 opacity-80 hover:bg-zinc-800 hover:opacity-100 transition-all">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">About</span>
              </a>
            </li>

            <li className="group p-2 px-10 opacity-80 hover:bg-zinc-800 hover:opacity-100 transition-all">
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">Projects</span>
              </a>
            </li>

            <li className="group p-2 px-10 opacity-80 hover:bg-zinc-800 hover:opacity-100 transition-all">
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
