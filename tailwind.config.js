/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
        amiri:  ['Amiri', 'serif'],
        serif:  ['Playfair Display', 'serif'],
      },
      colors: {
        sea: {
          deep:   '#0D1E22',
          mid:    '#14313A',
          mist:   '#2A5260',
          foam:   '#8BAFB8',
          pale:   '#C5DDE2',
        },
        fire: {
          deep:   '#180A02',
          coal:   '#2A1205',
          amber:  '#C45823',
          gold:   '#E8A43A',
          ash:    '#6B5040',
        },
        paper: '#F0E8D6',
      },
    },
  },
  plugins: [],
}
