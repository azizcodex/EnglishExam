/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      opacity: {
        '15': '0.15',
        '35': '0.35',
      },
      backgroundOpacity: {
        '15': '0.15',
        '35': '0.35',
      }
    },
  },
  plugins: [],
}
