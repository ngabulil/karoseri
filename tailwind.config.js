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
      "min767": {"min": "767px"},
      'sm': {'max': '767px'},
      'smDown': {'min': '700px', 'max': '1000px'},
      'md': {'min': '767px', 'max': '1280px'},
      'xmd': {'min': '1000px', 'max': '1280px'}
    }
  },
  plugins: [],
}