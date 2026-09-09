import { motion, useReducedMotion } from "framer-motion";

const base = "rounded-md text-sm font-semibold transition-colors duration-300";

const variants = {
  primary: "bg-accent text-zinc-950 hover:bg-accent-light",
  outline:
    "inline-flex items-center gap-2 border border-subtle/15 text-primary hover:border-accent/50 hover:text-accent-text",
};

const sizes = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

const Button = ({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default Button;
