/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script.js', './style.css', './**/*.html'],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#FFC107',
      },
      backgroundImage: {
        fruits: "url('/images/fruits.png')",
      },
    },
  },
  plugins: [],
};
