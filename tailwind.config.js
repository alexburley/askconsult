/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/frontend/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "550px",
      md: "1100px",
      lg: "1500px",
    },
  },
  plugins: [],
};
