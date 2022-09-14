/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sec-1": "#121212",
        "sec-2": "#181818",
      },
      maxWidth: {
        'app-fit': '95rem',
      },
    },
  },
  plugins: [],
}
