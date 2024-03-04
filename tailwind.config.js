/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        header: '6rem'
      },
      fontFamily: {
        inter: ["Inter", "sans"],
        italiana: ["Italiana", "serif"],
        roboto: ["Roboto", "sans"],
      },
      fontSize: {
        'xxs': ['0.65rem', {
          lineHeight: '0.75rem',
          letterSpacing: '-0.01em',
        }],
        'global': ['1.25rem', {
          lineHeight: '1.75rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
      }
    },
  },
  plugins: [],
}

