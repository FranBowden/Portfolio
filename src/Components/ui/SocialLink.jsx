import React from "react";

const sizes = {
  sm: "text-2xl text-zinc-400 hover:text-accent hover:scale-110 transition-all duration-300",
  lg: "text-3xl text-zinc-400 hover:text-accent hover:scale-110 hover:-translate-y-1 transition-all duration-300",
};

const SocialLink = ({ href, icon: Icon, size = "sm" }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Icon className={sizes[size]} />
  </a>
);

export default SocialLink;
