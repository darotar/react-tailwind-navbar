module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
