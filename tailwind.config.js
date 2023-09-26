/** @type {import('tailwindcss').Config} */
const Colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './resources/**/*.{edge,js,ts,vue,jsx,tsx}', // 👈
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: Colors.cyan,
      secondary: Colors.indigo,
      accent: Colors.pink,
      neutral: '1d283a',
      quinary: Colors.gray,
      senary: Colors.gray,
      success: '#2bd4bd',
      warning: '#f4c152',
      error: '#fb6f84',
    },
  },

  plugins: [
    require('flowbite/plugin')({
      charts: true,
      forms: true,
      tooltips: true,
    }),
  ],
}
