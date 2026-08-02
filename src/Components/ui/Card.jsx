import React from "react";

const Card = ({ as: Component = "div", className = "", children, ...props }) => (
  <Component
    className={`rounded-xl border border-white/10 bg-white/[0.03] ${className}`}
    {...props}
  >
    {children}
  </Component>
);

export default Card;
