/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#5c2940',
          800: '#71334f',
          700: '#88415f',
        },
        plum: {
          500: '#9e2858',
          400: '#cf4f82',
          300: '#eb89ae',
        },
        lavender: {
          DEFAULT: '#f0a6c4',
          200: '#ffdfeb',
        },
        champagne: {
          DEFAULT: '#ff79aa',
          600: '#d9477d',
        },
        warm: {
          DEFAULT: '#fff7fb',
          200: '#f5dfeb',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)', opacity: '0.2' },
          '50%': { transform: 'translate3d(12px, -28px, 0)', opacity: '0.9' },
        },
        flicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', opacity: '1' },
          '50%': { transform: 'scale(1.06) rotate(1deg)', opacity: '0.85' },
        },
        glow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        drift: 'drift 9s ease-in-out infinite',
        flicker: 'flicker 2.4s ease-in-out infinite',
        glow: 'glow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
