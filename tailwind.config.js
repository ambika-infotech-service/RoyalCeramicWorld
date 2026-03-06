/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ceramic: {
          50: '#f8f7f4',
          100: '#f0ebe4',
          200: '#e6daca',
          300: '#d4bfa3',
          400: '#b8956f',
          500: '#a17d4d',
          600: '#8b6842',
          700: '#6f5436',
          800: '#5c4632',
          900: '#4a392b',
        },
        clay: {
          50: '#fdf9f6',
          100: '#faf4ed',
          200: '#f5e8da',
          300: '#ead5be',
          400: '#dab899',
          500: '#c99f78',
          600: '#b38860',
          700: '#996f4c',
          800: '#7d5a41',
          900: '#664b38',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
