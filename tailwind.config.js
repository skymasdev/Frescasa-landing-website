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
      screens: {
        sm: '430px', // Add your custom breakpoint
      },
      fontSize: {
        '3.5xl': '1.875rem', // Custom size between 3xl and 4xl
      },
    },
  },
  plugins: [],
};
