/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#2b2d42",
        secondary: "#edf2f4",
        accent: "#e63946",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(25rem,1fr))",
      },
    },
    fontFamily: {
      title: ["Poppins", "sans-serif"],
      description: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
