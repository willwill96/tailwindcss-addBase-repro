const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [plugin(({addBase})=>{
      addBase({
        '.theme-1': {
          color: 'red'
        }
      })
    })],
  }