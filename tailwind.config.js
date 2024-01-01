/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'film-grain': "url('/film_images/bg.jpeg')",
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
