/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line  no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        green: '#76D674',
        red: '#FF0000',
        blue: '#0000FF',
        silver: '#C0C0C0',
        gold: '#FFD700',
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
};
