/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xsml': {'min': '400px', 'max': '767px'},
      'sm': {'max': '767px'},
      'md': {'min': '767px', 'max': '1280px'}
    }
  },
  plugins: [],
}