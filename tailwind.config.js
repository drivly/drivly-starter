/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
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
