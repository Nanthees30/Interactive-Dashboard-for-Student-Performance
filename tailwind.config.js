/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'mobile': '0px',      // default mobile
      'tablet': '768px',    // tablet breakpoint
      'laptop': '1024px',   // laptop breakpoint
      'desktop': '1280px',  // desktop
      'big': '1600px',      // large screens
    },
    },
  },
  plugins: [],
};