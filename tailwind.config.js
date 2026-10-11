/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#E8DFD1',
          300: '#D6C7B2',
          800: '#3D342B',
          900: '#2A231C',
        },
        rose: {
          light: '#F8E8E8',
          accent: '#C86D7B',
          deep: '#8A2B3E',
        },
        sage: {
          light: '#E2E9E1',
          primary: '#5C745D',
          dark: '#354737',
        },
        gold: {
          vintage: '#C5A059',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Courier Prime', 'Courier New', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        handwriting: ['Caveat', 'Dancing Script', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
        tapeSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        tapeSpin: 'tapeSpin 4s linear infinite',
      }
    },
  },
  plugins: [],
}
