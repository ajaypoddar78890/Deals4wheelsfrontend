/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "420px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      custom: "360px",
    },

    extend: {},
  },
  plugins: [],
};

// screens: {
//   sm: "480px",
//   md: "768px",
//   lg: "976px",
//   xl: "1440px",
// },
