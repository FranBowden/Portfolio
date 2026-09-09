const codeTones = [
  "text-sky-700 dark:text-sky-300",
  "text-fuchsia-700 dark:text-fuchsia-300",
  "text-orange-700 dark:text-orange-300",
  "text-amber-700 dark:text-amber-200",
  "text-emerald-700 dark:text-emerald-300",
  "text-violet-700 dark:text-violet-300",
];

const toneFor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return codeTones[hash % codeTones.length];
};

const variants = {
  tech: "inline-block px-2.5 py-1 text-xs font-mono font-medium",
  skill: "inline-block px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-200 hover:border-accent/50 hover:text-accent-text transition-colors duration-300",
};

const Tag = ({ children, variant = "tech" }) => (
  <span
    className={`rounded-md border border-subtle/10 bg-surface/5 ${variants[variant]} ${
      variant === "tech" ? toneFor(String(children)) : ""
    }`}
  >
    {children}
  </span>
);

export default Tag;
