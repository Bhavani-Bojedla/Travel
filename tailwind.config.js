/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./assets/Images/Home-img.jpg')",
        'logo':"url('./assets/Images/logo.webp')"
      },
      spacing:{
        120:'37.5rem',
        140:'57rem',
        97:'25.5rem',
        98:'27rem',
        53:'13.5rem',
        54:'13.2rem',
        22:'5.3rem'
      },
      fontSize: {
        'small':'0.5rem',
        '2.5xl':'1.8rem',
        '3xl':'2rem',
        '6xl': '4rem',
      },
      screens: {
        'phone': '10px'},
    },
    // colors: {
    //   'col-1':'#0F2341'
    // }
  },
  plugins: [],
}

