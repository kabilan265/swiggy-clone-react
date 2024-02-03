/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "light-heading": "rgb(61, 65, 82)",
      primary: "rgb(252, 128, 25)",
      green: "#3e8914",
      white: "#fff",
      "card-heading": "rgba(2, 6, 12, 0.75)",
      "accordin-border": "#f1f1f6",
      "accordin-menu-border": "#d3d3d3",
      'blue': "#447fd6",
      'warning':'red',
      'overlay':'rgba(0, 0, 0, 0.568)'
    },
  },
  plugins: [],
};
