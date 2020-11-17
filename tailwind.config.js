module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        gray: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#dedee1',
          300: '#cbc9d0',
          400: '#909099',
          500: '#5e5e66',
          600: '#414148',
          700: '#303136',
          800: '#1e1e1f',
          900: '#131315',
        },
      },
      fontFamily: {
        sans: [
          'Josefin Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      height: {
        '0.5': '0.125rem',
      },
      spacing: {
        '14': '3.25rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
