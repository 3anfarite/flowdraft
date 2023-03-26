/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    colors: {
      blue:'#36C5F0',
      yellow: '#F5F588',
      red: '#E01E5A',
      green:' #9AFCC2',
      black: '#231F20',
      gray: '#505050',
      cgrey: '#F1F1F1',
      white: '#FFF',
      cgray:"#8B94A3"
    },
    extend:{
      backgroundImage: {
        'hero': "url('../assets/heroBackground.jpg')",
        'mhero': "url('../assets/heroMobile.jpg')",
        'cdetail': "url(../assets/courseDetail.jpeg)"
      },
    },
    fontFamily: {
      ibm: ['IBM Plex Mono', 'monospace'],
      eb: ['EB Garamond', "serif"],
      alt: ['Questrial', "sans-serif"],
      roboto: ['Roboto', "sans-serif"]
    },
  }
  ,
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
