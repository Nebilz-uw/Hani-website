/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#FDF6E7',
          200: '#F4E4BC',
          300: '#EED599',
          400: '#E6C675',
          500: '#D4AF37',
          600: '#B39329',
          700: '#8C721F',
          800: '#665216',
          900: '#40330D'
        },
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563'
        },
        cream: {
          DEFAULT: '#FDF8F3',
          dark: '#F7EFE5'
        },
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      screens: {
        '3xl': '1792px',
      },
    },
  },
  plugins: [],
};