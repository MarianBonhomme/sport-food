/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#10AC84",
        orange: "#FF9F43",
        blue: "#569FFF",
        red: "#EE5353",
        pink: "#F368E0",
        lgrey: "#C8D6E5",
        grey: "#8395A7",
        black: "#212F3E",
        cwhite: "#F2F2F2",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        lora: "Lora, serif",
      },
      boxShadow: {
        custom:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        border:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      },
    },
  },
  plugins: [],
};
