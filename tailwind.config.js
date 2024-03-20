/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
    "./src/components/**/*.{js,jsx,html}",
  ],
  theme: {
    extend: {
      fontSize: {
        giant: '200px',
        'header-lg': ['4.5rem', '5.5rem'], // Example header size for large screens
        'header-sm': ['3rem', '3.5rem'], // Example header size for small screens
        'body-lg': ['1.25rem', '1.5rem'], // Example body size for large screens
        'body-sm': ['1rem', '1.25rem'], // Example body size for small screens
      },
      colors: {
        customOrange: '#ffb338',
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'green-custom': '#788475',
      'brown-custom': '#312509',
      'orange-custom': '#FFB53A',
      'yellow-custom': '#E4CE77',
     })
  },
  plugins: [],
}
