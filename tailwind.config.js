module.exports = {
  purge: {
    content:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html',],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
