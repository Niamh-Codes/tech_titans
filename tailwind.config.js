/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js, jsx, html}",
    "./src/components/**/*.{js,jsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#E4CE77',
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