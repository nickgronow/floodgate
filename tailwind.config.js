module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem'
      }
    },
    extend: {
      colors: {
        'fg-blue': '#1fbddb',
        'fg-white': '#ffffff',
        'fg-lighter': '#f7f6f6',
        'fg-light': '#e8e8e8',
        'fg-dark': '#232628',
        'fg-green': '#a1ce3d',
        'fg-yellow': '#facd09',
        'fg-red': '#f9420b',
      },
      rotate: {
        '5': '5deg',
        '10': '10deg',
        '15': '15deg',
        '20': '20deg',
        '25': '25deg'
      },
      translate: {
        '1-10': '-10%',
        '1-20': '-20%',
        '1-30': '-30%',
        '1-40': '-40%'
      }
    }
  },
  variants: {},
  plugins: [],
}
