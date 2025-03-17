/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fade: 'fadeIn 2s ease-in-out',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'playfair': ['Playfair Display, serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* WebKit browsers */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    },
  ],
}

