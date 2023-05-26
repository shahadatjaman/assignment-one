/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        sidebar: "9%",
        account: "320px",
      },
      colors: {
        "gray-one": "#232d38",
        "gray-two": "#151e28",
        "gray-three": "#373f48",
        secondary: "#644eff",
      },
    },
  },
  plugins: [],
};
