/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      backgroundImage: {
        // 'perusahaan-galeri': "url('https://img.freepik.com/free-vector/gradient-glassmorphism-background_23-2149447863.jpg')",
        'perusahaan-galeri': "url('/src/assets/svg/perusahaan.svg')",
        'gradient-to-r-green-teal': 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
        'gradient-to-r-blue-cyan': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
        'gradient-to-r-gray-black': 'linear-gradient(to right, #141e30 0%, #243b55 100%)',
      }
    },
    screens: {
      'min540-max767': {
        'min': '540px',
        'max': '767px'
      },
      'max540': {
        'max': '540px'
      },
      'max580': {
        'max': '580px'
      },
      'max600': {
        'max': '600px'
      },
      'max700': {
        'max': '700px'
      },
      'max1000': {
        'max': '1000px'
      },
      'xsml': {
        'min': '400px',
        'max': '767px'
      },
      "min767": {
        "min": "767px"
      },
      'sm': {
        'max': '767px'
      },
      'smDown': {
        'min': '700px',
        'max': '1000px'
      },
      'md': {
        'min': '767px',
        'max': '1280px'
      },
      'xmd': {
        'min': '1000px',
        'max': '1280px'
      },
      'min1600': {
        'min': '1600px'
      },
    }
  },
  plugins: [],
}