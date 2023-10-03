/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'restourant-bg': "url('https://getir.com/_next/static/images/partners-background-e516806adcf95650572224b0c2e681f3.jpg')",
        
      },
      maxWidth:{
        '292': '292px',
      },
      gridColumn:{
        'span2': 'span 2 / auto'
      },
      boxShadow: {
       'bx-s': '0px 2px 16px rgb(93, 62, 188, / 8%) '
      },
      spacing:{
        '500':'500px',
      },
      colors:{
        "color-white": "#fff",
        "color-white-transparent": "#ffffffa6",
        "color-black": "#191919",
        "color-gray-dark": "#3e3e3e",
        "color-gray": "#a2a2a2",
        "color-gray-mid": "#525252",
        "color-gray-light": "#f5f5f5",
        "color-gray-background": "#fafafa",
        "color-gray-storm": "#697488",
        "color-gray-50": "#f0f1f3",
        "color-primary": "#5d3ebc",
        "color-primary-light": "#f3f0fe",
        "color-secondary": "#7849f7",
        "color-danger": "#db471e",
        "color-warning": "#ddf300",
        "color-success": "#188977",
        "color-info": "#4eb5eb",
        "color-brand-yellow": "#ffd300",
        "color-purple-light": "#dbdbff",
        "color-black-800": "#0e0e0e",
      }
    },
  },
  plugins: [],
}
