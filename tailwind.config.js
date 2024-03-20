/** @type {import('tailwindcss').Config} */
module.exports={
  content: [
    "./src/**/*.{js, jsx, html}",
    "./src/components/**/*.{js,jsx,html}",
  ],
  theme: {
    extend: {
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