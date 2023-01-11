/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#725AC1", // purple
        "secondary-color": "#242038", // dark purple
        "tertiary-color": "#F7ECE1", // cream
        "quaternary-color": "#CAC4CE", // gray
      },
      fontFamily: {
        "roc-grotesk": ["roc-grotesk", "sans-serif"],
        "komu-b": ["komu-b", "sans-serif"],
      },
    },
  },
  plugins: [],
};
