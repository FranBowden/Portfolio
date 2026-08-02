export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#8183f4",
          light: "#a5a6f9",
          dark: "#4f46e5",
        },
      },
    },
  },
  plugins: [],
}