/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { colors: {
      white: '#ffffff',
      green: '#76D674',
      red: '#FF0000',
      blue: '#0000FF',
      transparent: 'transparent',
    }},
  },
  plugins: [],
}

