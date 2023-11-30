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
      screens: {
        xlrid: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgrid: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mdrid: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smrid: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      width: {
        128: "38rem",
      },
      width: {
        120: "32rem",
      },
      height: {
        128: "42rem",
      },
      backgroundImage: {
        wanita: "https://cdn.idntimes.com/content-images/post/20190515/57775452-862343397439658-5245428455365170266-n-3bad84ff9fb557ba5de00b554cc7e667.jpg",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
