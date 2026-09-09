import { BiMoon, BiSun } from "react-icons/bi";
import { motion, useReducedMotion } from "framer-motion";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      whileTap={reduceMotion ? undefined : { scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`flex h-12 w-12 md:h-9 md:w-9 items-center justify-center text-muted hover:text-accent-text transition-colors duration-300 ${className}`}
    >
      {isDark ? <BiSun className="text-xl" /> : <BiMoon className="text-xl" />}
    </motion.button>
  );
};

export default ThemeToggle;
