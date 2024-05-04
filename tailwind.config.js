/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        inter: "Inter",
        "open-sans": "'Open Sans'"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

