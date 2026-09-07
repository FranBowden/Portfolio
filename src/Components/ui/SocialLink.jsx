const sizes = {
  sm: "text-2xl text-zinc-400 hover:text-accent hover:scale-110 transition-all duration-300",
  lg: "text-3xl text-zinc-400 hover:text-accent hover:scale-110 hover:-translate-y-1 transition-all duration-300",
};

const SocialLink = ({ href, icon: Icon, size = "sm", label }) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
    <Icon className={sizes[size]} aria-hidden="true" />
  </a>
);

export default SocialLink;
