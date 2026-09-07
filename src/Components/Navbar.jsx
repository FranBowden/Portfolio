import { useState } from "react";
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
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 lg:px-32 flex items-center justify-between text-white">
        <a href="#about" className="flex items-center gap-3 py-4 group">
          <span className="font-mono text-xs sm:text-sm text-zinc-400">
            fran-bowden<span className="text-zinc-400">/</span>
            <span className="text-zinc-300 group-hover:text-accent transition-colors duration-300">
              portfolio.jsx
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-stretch text-sm font-mono">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-2 h-14 px-4 border-t-2 border-transparent text-zinc-400 hover:text-white hover:border-accent hover:bg-white/[0.03] transition-all duration-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                {link.label}.jsx
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white py-4"
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
          <ul className="md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-b border-white/10 text-center font-mono">
            {links.map((link) => (
              <li
                key={link.href}
                className="p-3 px-10 text-zinc-300 hover:bg-white/5 hover:text-accent transition-all border-t border-white/5"
              >
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  <span className="text-base">{link.label}.jsx</span>
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
