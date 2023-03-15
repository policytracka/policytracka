/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#FF585D",
        'secondary': "#FFB549"
      },
      fontFamily:{
        'poppins': "Poppins",
        'kanit': "Kanit",
        'chonburi': "Chonburi"
      }
    },
  },
  plugins: [],
}
