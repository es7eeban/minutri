/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-inicio": "url('./assets/background-inicio.svg')",
      },
    },
    colors: {
      bgSidebar: "#D2B6E4",
      textSidebar: "#8D1493",
      bgWhite: "#FFF",
    },
  },
  plugins: [],
};
