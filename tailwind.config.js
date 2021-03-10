module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme =>({
        'grit': "url('pages/images/gritMount.png')",
        'grit2': "url('pages/images/grit2.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
