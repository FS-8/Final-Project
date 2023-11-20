/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "38rem",
      },
      height: {
        128: "42rem",
      },
    },
  },
  plugins: [],
};
