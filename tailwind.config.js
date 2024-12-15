/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        work_img: "url('src/assets/work1.jpg')",
      },

      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Syne ", "sans-serif"],
      },
      colors: {
        heroBg: "#0e1222",
        para: "rgb(0 0 0 /80%)",
        primary: "#06a055",
      },
    },
  },
  plugins: [],
};
