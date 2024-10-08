/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./assets/Images/Home-img.jpeg')",
        'logo':"url('./assets/Images/logo.webp')"
      },
      spacing:{
        120:'36.1rem'
      },
    },
  },
  plugins: [],
}

