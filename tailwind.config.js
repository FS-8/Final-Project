/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ungu: "#893168",
        putih: "#EAEAEA",
        hitam: "#050404",
      },
      // screens: {
      //   xl: { max: "1279px" },
      //   // => @media (max-width: 1279px) { ... }

      //   lg: { max: "1023px" },
      //   // => @media (max-width: 1023px) { ... }

      //   md: { max: "767px" },
      //   // => @media (max-width: 767px) { ... }

      //   sm: { max: "639px" },
      //   // => @media (max-width: 639px) { ... }

      width: {
        128: "38rem",
      },
      width: {
        120: "32rem",
      },
      height: {
        128: "42rem",
      },
    },
  },
  plugins: [],
};
