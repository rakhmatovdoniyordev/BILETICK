import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "aeonik": ["Aeonik"]
    },
    colors: {
      ...colors,
      "red-person": "#C61F1F",
      "black-person": "#00000080",
      "white-person": "#FFFFFF"
    },
    extend: {},
    container: {
      center: true,
      padding: "16px",
      screens: {
        sm: '600px',
        md: '720px',
        lg: '970px',
        xl: '1100px',
        '2xl': '1308px'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}