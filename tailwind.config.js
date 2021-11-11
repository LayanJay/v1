module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        white: {
          base: '#F1F1F1',
        },
        primary: {
          dark: '#0A192F',
          base: '#13374A',
          light: '#0092A6',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
