/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'silver': '#cbd5e1',
      'black': '#000000',
      'palepink': 'rgba(96, 58, 73, 0.742) 100%',
    },
  },
  plugins: [],
}
