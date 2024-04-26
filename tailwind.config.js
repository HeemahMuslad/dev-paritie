/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '0px', 'max': '480px'},  
        'md': {"max": '750px'},  
        'lg': {'min': '480px', 'max': '880px'}, 
         '2xl':{"max": '880px'},
      },
      height:{sm:"20%",md:"100%"},
      width:{xlg:"95%",lg:"90%", half:"50%", "1xl":"88%", md:"68%", sm:"20%", xsm:"40%", xxsm:"30%" },
      colors: {dark:"#474747", solid:"#434B4D", primary:"#3C72FC", darker:"#0F0D1D" , light:"#8F8DA0", stroke:"#3C72FC", darkest:"#1A2041", blue:"#EBF1FF", secondary:"#F2F4F8"},
      fontSize:{
        xl:"70px",
        lg:"50px",
        md:"30px",
        sm:"40px",
        xs:"20px",
        "2xs":"10px"
      },
    

    },
  },
  plugins: [],
}