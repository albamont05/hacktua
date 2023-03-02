/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-dark': '#4AB5A9',
        'exercise': '#E66060',
        'nutrition': '#92E1A8',
        'dream': '#9EE5F4',
        'mind': '#C792E1',
        'work': '#E68D60',
        'title-gray': '#2F3043',
        'orange-dark': '#F38856',
        'orange-light': '#FDE5DB',
        'purple-dark': '#D08DE5',
        'purple-light': '#F5E6F9',
        'red-dark': '#F85559',
        'red-light': '#FFDBDB',
        'blue-dark': '#8BE7F7',
        'blue-light': '#E7FAFE',
        'green-dark': '#79E4A4',
        'green-light': '#E4FBEB',
      },

      spacing: {
        '82': '21rem',
        '86': '22rem',
        '88': '23rem',
      }
    },
  },
  plugins: [],
}
