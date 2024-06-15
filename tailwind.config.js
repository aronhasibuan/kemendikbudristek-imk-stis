/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "backgroundNavbar" : "#F5F5F5",
        "backgroundArticle": "#B9DBF7",
        "customBlue": "#005689",
        "biruKemdikbudristek" : "#3683C2",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

