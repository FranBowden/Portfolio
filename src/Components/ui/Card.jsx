const handleSpotlightMove = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};

const Card = ({ as: Component = "div", className = "", children, ...props }) => (
  <Component
    {...props}
    onMouseMove={handleSpotlightMove}
    className={`group/spotlight relative overflow-hidden rounded-[20px] border border-subtle/10 bg-surface/[0.03] ${className}`}
  >
    <div
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
      style={{
        background:
          "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgb(129 131 244 / 0.10), transparent 70%)",
      }}
      aria-hidden="true"
    />
    {children}
  </Component>
);

export default Card;
