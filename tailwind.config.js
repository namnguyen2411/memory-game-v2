/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif', 'ui-sans-serif']
      },
      colors: {
        red600: '#dc2626',
        cyan400: '#22d3ee'
      },
    }
  },
  plugins: []
}
