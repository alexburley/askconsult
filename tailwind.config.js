/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/frontend/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary
        p: {
          100: "hsl(182, 45%, 80%)",
          200: "hsl(182, 45%, 70%)",
          300: "hsl(182, 45%, 60%)",
          400: "hsl(182, 45%, 50%)", // SAME AS DEFAULT,
          DEFAULT: "#46b5b9",
          500: "hsl(182, 45%, 40%)",
          600: "hsl(182, 45%, 30%)",
          700: "hsl(182, 45%, 20%)",
          800: "hsl(182, 45%, 10%)",
        },
        // secondary
        s: {
          DEFAULT: "#FFA384",
        },
        // tertiary
        t: {
          DEFAULT: "#EFE7BC",
        },
        // contrast
        c: {
          DEFAULT: "#E7F2F8",
        },
      },
    },
    screens: {
      sm: "550px",
      md: "1100px",
      lg: "1500px",
    },
  },
  plugins: [],
};
