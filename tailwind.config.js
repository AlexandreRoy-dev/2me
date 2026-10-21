/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./en/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        brand: "#00569d",
        brandDark: "#003f75",
        brandLight: "#e0f2fe",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
