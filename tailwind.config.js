/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        // => @media (min-width: 476px) { ... }
      },
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, rgba(8, 123, 171, 1) 0%, rgb(2, 25, 44) 100%)",
        "custom-image": "url('../src/assets/images/bgWalePorfolio.svg')",
      },
      fontFamily: {
        playwrite: ["Playwrite CL", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        zain: ["Zain", "serif"],
        zilla: ["Zilla Slab", "serif"],
        sister: ["Love Ya Like A Sister", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
