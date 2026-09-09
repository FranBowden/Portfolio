import { motion, useReducedMotion } from "framer-motion";

const sizes = {
  sm: "text-2xl text-muted hover:text-accent-text transition-colors duration-300",
  lg: "text-3xl text-muted hover:text-accent-text transition-colors duration-300",
};

const lift = {
  sm: { scale: 1.15 },
  lg: { scale: 1.15, y: -3 },
};

const SocialLink = ({ href, icon: Icon, size = "sm", label }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      whileHover={reduceMotion ? undefined : lift[size]}
      whileTap={reduceMotion ? undefined : { scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-block"
    >
      <Icon className={sizes[size]} aria-hidden="true" />
    </motion.a>
  );
};

export default SocialLink;
