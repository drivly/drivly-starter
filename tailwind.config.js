/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "drivly-green": "#00cab9",
        "drivly-dark": "#070707"
      }
    },
  },
  plugins: [],
}
