const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: [],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        "w-primary": "#5386E4",
        "w-secondary": "#FFC145",
        "w-gray": "#FAFCFF",
        "w-white": "#FFFFFF",
        "w-text": "#403E4E",
        "w-info": "#79ADDC",
        "w-warning": "#FFC145",
        "w-success": "#A3C9A8",
        "w-danger": "#FF5964",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"]
      },
      fontSize: {
        'xxs': '.60rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      transitionTimingFunction: {
        'easeOutQuad': 'cubic-bezier(0.5, 1, 0.89, 1)',
      }
    },
  },
  variants: {
    extend: {}
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
};
