import React from "react";

const variants = {
  tech: "inline-block px-2.5 py-1 text-xs font-medium text-zinc-300",
  skill: "inline-block px-3 py-1.5 text-sm text-zinc-200 hover:border-accent/50 hover:text-accent transition-colors duration-300",
};

const Tag = ({ children, variant = "tech" }) => (
  <span className={`rounded-md border border-white/10 bg-white/5 ${variants[variant]}`}>
    {children}
  </span>
);

export default Tag;
