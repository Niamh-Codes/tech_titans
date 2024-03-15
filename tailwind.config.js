/** @type {import('tailwindcss').Config} */
module.exports={
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
  },
  plugins: [],
}