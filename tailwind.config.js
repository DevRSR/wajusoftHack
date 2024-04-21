/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Plus Jakarta Sans", "serif"],
    },
    screens: {
      'xsm': '325px',

      'xs': '480px',
      
      'sm': '640px',
      
      'md': '768px',
     
      'lg': '1024px',

      'xl': '1280px',
     
      '2xl': '1440px',

    },
    extend: {
      colors: {
        'light-green': 'rgba(52,202,165,0.12)',
        'light-red': 'rgba(237,84,78,0.12)',
        'custom-green': 'rgb(52,202,165)',
        'custom-red': 'rgb(237,84,78)',
        'chocolate': '#606060',
        'dark-chocolate': '#3a3f51',
        'coffee': '#898989',
        'dark-purple': '#26282c',
        'gray': '#fafafa'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
