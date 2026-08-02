import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto py-5 px-6 lg:px-32 flex items-center justify-between text-white">
        <a
          href="#about"
          className="font-display text-lg font-semibold tracking-tight text-white hover:text-accent transition-colors duration-300"
        >
          Francesca Bowden
        </a>
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <BiX className="text-3xl" />
          ) : (
            <BiMenu className="text-3xl" />
          )}
        </button>

        {isMenuOpen && (
          <ul className="md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-b border-white/10 text-center">
            {links.map((link) => (
              <li
                key={link.href}
                className="p-3 px-10 text-zinc-300 hover:bg-white/5 hover:text-white transition-all"
              >
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  <span className="text-base">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
