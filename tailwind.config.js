/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eaae3f",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#010E30",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
