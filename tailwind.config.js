/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'pp-neue-machina': ['PP Neue Machina', 'sans-serif'],
      },
      colors:{
        accentblue: '#202C42',
        accentorange: '#ff8b00'
      },
      boxShadow: {
        'buttonshadow': '3px 5px #fff',
        'bluebuttonshadow': '3px 5px #202C42',
        'skybuttonshadow': '7px 9px #033977',
        'orangebuttonshadow': '7px 9px #ff8b00',
      },
      fontWeight: {
        'extra-bold': '800',
        'black': '900',
      },
      transform: {
        'scale-105-translate': 'scale(1.05) translate(5%, 5%)',
      },
    },
  },
  plugins: [],
}

