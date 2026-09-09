import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";
import ThemeToggle from "./ui/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const EASE = [0.22, 1, 0.36, 1];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // Shared so the header and the mobile dropdown always render as one
  // continuous surface instead of two panels that happen to sit together.
  const surfaceClass = scrolled
    ? "bg-page/95 dark:bg-page/98"
    : "bg-page/80 dark:bg-page/92";
  const edgeClass = scrolled
    ? "border-subtle/10 shadow-lg shadow-black/10 dark:shadow-black/20"
    : "border-transparent shadow-none";

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-all duration-300 ${surfaceClass} ${
        isMenuOpen ? "border-transparent shadow-none" : edgeClass
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-32 flex items-center justify-between text-primary">
        <a href="#about" className="flex items-center gap-3 py-4 group">
          <span className="font-mono text-xs sm:text-sm text-muted">
            fran-bowden<span className="text-muted">/</span>
            <span className="text-primary/90 group-hover:text-accent-text transition-colors duration-300">
              portfolio.jsx
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-stretch text-sm font-mono">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 h-14 px-4 border-t-2 border-transparent text-muted hover:text-primary hover:border-accent hover:bg-surface/[0.03] transition-all duration-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                  {link.label}.jsx
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle className="ml-2" />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="flex h-12 w-12 items-center justify-center text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <BiX className="text-3xl" />
            ) : (
              <BiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="absolute top-full inset-x-0 h-screen -z-10 bg-zinc-950/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.ul
              key="menu"
              className={`md:hidden absolute top-full inset-x-0 overflow-hidden rounded-b-2xl border-b backdrop-blur-md font-mono ${surfaceClass} ${edgeClass}`}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.3, ease: EASE }}
            >
              {links.map((link) => (
                <li
                  key={link.href}
                  className="border-t border-subtle/5 first:border-t-0"
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-6 lg:px-32 py-4 text-primary/90 hover:bg-surface/5 hover:text-accent-text transition-colors duration-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                    <span className="text-base">{link.label}.jsx</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
