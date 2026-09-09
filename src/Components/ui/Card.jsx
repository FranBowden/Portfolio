const Card = ({ as: Component = "div", className = "", children, ...props }) => (
  <Component
    className={`rounded-[20px] border border-subtle/10 bg-surface/[0.03] ${className}`}
    {...props}
  >
    {children}
  </Component>
);

export default Card;
