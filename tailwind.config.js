/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        '128': '32rem'
      },
      colors:{
        'giants-orange':'#F94A29',
        'dark-charcoal':'#313131',
        'banana-yellow':'#FCE22A'
      },
      fontFamily:  {
        sans : ['Montserrat', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

