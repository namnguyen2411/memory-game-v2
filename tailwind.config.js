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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' }
        },
        fade: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 0 },          
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fade: 'fade .2s linear forwards',
      }
    }
  },
  plugins: []
}
