/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f2eee3',
        gold: '#d4af37',
        beige: '#b0987c',
        navy: '#243a73',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
