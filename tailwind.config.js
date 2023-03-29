/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
    enabled: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'lv': 'rgba(116, 89, 217, 0.2)',
      },
    },
    
  },
  plugins: [],
}