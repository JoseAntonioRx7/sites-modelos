/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'Helvetica Neue', 'sans-serif'],
        body: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        ink: '#191416',
        paper: '#FCF8F7',
        mist: '#F4ECEE',
        line: '#E8DDE0',
        accent: '#C46D7A',
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
}
