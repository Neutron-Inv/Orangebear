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
      }
    },
  },
  plugins: [],
}

