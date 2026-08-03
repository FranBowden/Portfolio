const base = "rounded-md text-sm font-semibold transition-all duration-300";

const variants = {
  primary: "bg-accent text-zinc-950 hover:bg-accent-light",
  outline:
    "inline-flex items-center gap-2 border border-white/15 text-white hover:border-accent/50 hover:text-accent",
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
}) => (
  <a
    href={href}
    className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    {...props}
  >
    {children}
  </a>
);

export default Button;
