/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './script.js',
    './style.css',
    './**/*.html',
    './node_modules/preline/dist/preline.css',
  ],
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
