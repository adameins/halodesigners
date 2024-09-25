/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/*.svg"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Quicksand', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}

