/** @type {import('tailwindcss').Config} */
// export default {
  
//   plugins: [],
// }

module.exports = {
  plugins: [
      require('tailwindcss'),
      require('autoprefixer'),

      // Other PostCSS plugins if needed
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
};
