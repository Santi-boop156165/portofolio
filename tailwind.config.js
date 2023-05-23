// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        'app-primary': {
          50: '#fef3ff',
          100: '#fde5ff',
          200: '#fbcaff',
          300: '#faa1ff',
          400: '#f868ff',
          500: '#ef30ff',
          600: '#d710e9',
          700: '#b809c3',
          800: '#970a9e',
          900: '#7d0e81',
        },
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};