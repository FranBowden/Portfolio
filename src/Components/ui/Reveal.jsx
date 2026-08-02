import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children, className, x = 0, y = 0, delay = 0, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
