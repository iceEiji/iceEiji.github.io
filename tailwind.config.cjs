/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        base: "#F5F5F5",
        main: "#4699CA",
        accent: "#F16C41",
      },
    },
  },
  plugins: [],
};
