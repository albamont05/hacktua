/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'teal-dark': '#4AB5A9',
      'exercise': '#E66060',
      'nutrition': '#92E1A8',
      'dream': '#9EE5F4',
      'mind': '#C792E1',
      'work': '#E68D60',
    },
  },
  plugins: [],
}
