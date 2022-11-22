const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html,twig}",
    "./components/**/*.{js,ts,jsx,tsx,html,twig}",
  ],
  theme: {
    extend: {
        colors: {
            'bred': '#3730a3',
            'bred-2': '#3730a3',
            'bgray-bg': '#121317',
            'bgray-secondary': '#1A1C23',
            'bgray-overlay': '#272a35',
            'bgray-forward':'#393D4C',
            'bgray-dropdown':'#191a20',
        },
        fontFamily: {
            sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
