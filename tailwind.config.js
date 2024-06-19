/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        primary: "#152F60",
        text: "#353640",
        accent: "#",
      },
      fontFamily: {
        sans: "Poppins",
      },
      screens: {
        lg: "992px",
      },
      listStyleType: {
        disc: "disc",
        decimal: "decimal",
      },
    },
  },
  plugins: [],
};
