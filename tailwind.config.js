export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#8183f4",
          light: "#a5a6f9",
          dark: "#4f46e5",
        },
        code: {
          comment: "#6a9955",
        },
        // Theme-aware semantic tokens, backed by CSS custom properties
        // (defined in index.css) so a single class works in both themes.
        page: "rgb(var(--page) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        subtle: "rgb(var(--border) / <alpha-value>)",
        primary: "rgb(var(--text-primary) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        "accent-text": "rgb(var(--accent-text) / <alpha-value>)",
        comment: "rgb(var(--code-comment) / <alpha-value>)",
        imagebg: "rgb(var(--image-bg) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}
