/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
          'Lineargradient(active input border)': 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
          'Red(input errors)': 'hsl(0, 100%, 66%)',
          'White': 'hsl(0, 0%, 100%)',
          'Lightgrayishviolet': 'hsl(270, 3%, 87%)',
          'Darkgrayishviolet': 'hsl(279, 6%, 55%)',
          'Verydarkviolet': 'hsl(278, 68%, 11%)',
      }
    },
  },
  plugins: [],
}

