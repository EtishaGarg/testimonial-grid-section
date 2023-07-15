/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

