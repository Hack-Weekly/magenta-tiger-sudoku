/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        tektur: ["Tektur", "cursive"],
      },
      gridTemplateColumns: {
        nine: "repeat(9,1fr)",
      },
      gridTemplateColumns: {
        nine: "repeat(9,1fr)",
      },
    },
  },
};
