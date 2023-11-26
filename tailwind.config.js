/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ungu: "#893168",
        putih: "#EAEAEA",
        hitam: "#050404",
      },
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
