/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js",
],
darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wave: {
          to: {
            "margin-left": "-51%"
          }
        },
        carouselAnim:{
          from: {
            transform: 'translate(0, 0)'
          },
          to: {
            transform: 'translate(calc(-100% + (4*250px)))'
          }
        }
      }
    },
    animation: {
      wave: "wave 1.5s ease-in-out",
      carouselAnim: "carouselAnim 3.5s infinite alternate linear"
    }
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
